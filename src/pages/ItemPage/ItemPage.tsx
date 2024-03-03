import React, { useLayoutEffect, useState } from "react"
import styles from "./ItemPage.module.scss"
import Slider from "components/Slider"
import wineImage from "../../assets/images/wine.jpg"
import wineThumbnail from "../../assets/images/wine.jpg"
import glassImage from "../../assets/images/glass.jpg"
import glassThumbnail from "../../assets/images/glass.jpg"
import { Outlet, useParams } from "react-router"
import axios from "axios"
import { Response } from "types"

const images = [
  {
    original: wineImage,
    thumbnail: wineThumbnail,
  },
  {
    original: glassImage,
    thumbnail: glassThumbnail,
  },
  {
    original: wineImage,
    thumbnail: wineThumbnail,
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
  // const images: Image[] = [];

  const getItem = async () => {
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/products/${itemId}`,
        {
          method: "GET",
        }
      )
      setImages(
        response.data.items.map((itemPic: ItemPics) => ({
          original: itemPic.url,
          thumbnail: itemPic.url, // Assuming you want to use the same URL for both original and thumbnail
        }))
      )
      setItem(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    console.log(itemId)
    getItem()
  }, [])
  return (
    <div className={styles["item-page"]}>
      <div className={styles["item-page__inner"]}>
        <div className={styles["item-page__content"]}>
          <Slider
            className={styles["item-page__content_slider"]}
            images={images}
          />
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
