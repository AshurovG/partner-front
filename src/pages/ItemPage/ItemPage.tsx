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

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

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
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
      // setIsLoading(false) // Устанавливаем состояние загрузки в false после получения данных
    } catch (error) {
      console.log(error)
      // setIsLoading(false) // Также устанавливаем состояние загрузки в false в случае ошибки
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
          {!isLoading ? (
            <h1 className={styles["item-page__content_adapt-title"]}>
              {item?.title}
            </h1>
          ) : (
            <Skeleton
              highlightColor="#ac6823"
              width={`50%`}
              height={"32px"}
              baseColor="#cc9966"
              className={styles["item-page__content_adapt-title"]}
            />
          )}

          {!isLoading ? (
            <Slider
              className={styles["item-page__content_slider"]}
              images={images}
            />
          ) : (
            <div className={styles["item-page__content_slider"]}>
              <Skeleton
                width={"100%"}
                height={500}
                className={styles["item-page__content_slider"]}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            </div>
          )}
          <div className={styles["item-page__content_text"]}>
            {!isLoading ? (
              <>
                <h1 className={styles["item-page__content_text_title"]}>
                  {item?.title}
                </h1>
                <p className={styles["item-page__content_text_description"]}>
                  {/* {item?.description} */}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  dolorum animi molestias quae? Nihil libero iste dicta
                  inventore aspernatur id, quae, asperiores, quas repudiandae
                  dolorem cumque corrupti esse vitae dignissimos? Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Nam dolorum
                  animi molestias quae?
                </p>
              </>
            ) : (
              <>
                <div className={styles["item-page__content_text_title"]}>
                  <Skeleton
                    highlightColor="#ac6823"
                    width={`50%`}
                    baseColor="#cc9966"
                    style={{ marginBottom: 15 }}
                  />
                </div>

                <Skeleton
                  highlightColor="#ac6823"
                  baseColor="#cc9966"
                  count={3}
                  style={{ marginTop: 10 }}
                  className={styles["item-page__content_text_description"]}
                />
              </>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPage
