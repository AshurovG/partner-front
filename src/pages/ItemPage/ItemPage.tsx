import React from "react"
import styles from "./ItemPage.module.scss"
import Slider from "components/Slider"
import wineImage from "../../assets/images/wine.jpg"
import wineThumbnail from "../../assets/images/wine.jpg"
import glassImage from "../../assets/images/glass.jpg"
import glassThumbnail from "../../assets/images/glass.jpg"

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

const ItemPage = () => {
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
              Винный бокал
            </h1>
            <p className={styles["item-page__content_text_description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPage
