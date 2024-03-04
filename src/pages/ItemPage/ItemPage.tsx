import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./ItemPage.module.scss"
import Slider from "components/Slider"
import wineImage from "../../assets/images/wine.jpg"
import wineThumbnail from "../../assets/images/wine.jpg"
import glassImage from "../../assets/images/glass.jpg"
import glassThumbnail from "../../assets/images/glass.jpg"
import { useParams } from "react-router"
import axios from "axios"
import { Response } from "types"

const mockImages = [
  {
    original: wineImage,
    thumbnail: wineImage,
  },
  {
    original: glassImage,
    thumbnail: glassImage,
  },
  {
    original: wineImage,
    thumbnail: wineImage,
  },
  {
    original: wineImage,
    thumbnail: wineImage,
  },
  {
    original: wineImage,
    thumbnail: wineImage,
  },
]

type Image = {
  original: string
  thumbnail: string
}

type ItemPics = {
  product_item_id: number
  url: string
  product_id: number
}

type Item = {
  product_id: number
  title: string
  url: string
  description: string
  category_id: number
  items: ItemPics[]
}
const ItemPage = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState<Item>()
  const [images, setImages] = useState<Image[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true) // Добавляем состояние для отслеживания загрузки

  const getItem = async () => {
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/products/${itemId}`,
        {
          method: "GET",
        }
      )

      setItem(response.data)
      setImages(
        response.data.items.map((itemPic: ItemPics) => ({
          original: itemPic.url,
          thumbnail: itemPic.url,
        }))
      )
      setIsLoading(false) // Устанавливаем состояние загрузки в false после получения данных
    } catch (error) {
      console.log(error)
      setIsLoading(false) // Также устанавливаем состояние загрузки в false в случае ошибки
    }
  }

  useEffect(() => {
    getItem()
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Рендерим Slider только после загрузки данных
  return (
    <div className={styles["item-page"]}>
      <div className={styles["item-page__inner"]}>
        <div className={styles["item-page__content"]}>
          {!isLoading && (
            <Slider
              className={styles["item-page__content_slider"]}
              images={images}
            />
          )}
          <div className={styles["item-page__content_text"]}>
            <h1 className={styles["item-page__content_text_title"]}>
              {item?.title}
            </h1>
            <p className={styles["item-page__content_text_description"]}>
              {item?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPage
