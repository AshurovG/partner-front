import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./ItemPage.module.scss"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Response } from "types"
import Slider from "components/Slider"
import Button from "components/Button"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

// const mockImages = [
//   {
//     original: wineImage,
//     thumbnail: wineImage,
//   },
//   {
//     original: glassImage,
//     thumbnail: glassImage,
//   },
//   {
//     original: wineImage,
//     thumbnail: wineImage,
//   },
//   {
//     original: wineImage,
//     thumbnail: wineImage,
//   },
//   {
//     original: wineImage,
//     thumbnail: wineImage,
//   },
// ]

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
  const { categoryKey } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState<Item>()
  const [images, setImages] = useState<Image[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
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
      }, 300)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItem()
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles["item-page"]}>
      <div className={styles["item-page__inner"]}>
        <div className={styles["item-page__inner_back"]}>
          <Button
            onClick={() => navigate(`/${categoryKey}`)}
            className={styles["item-page__inner_back-btn"]}
            mode="inverse"
            isRedirecting={false}
          >
            Назад
          </Button>
        </div>

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
            images.length == 1 ? (
              <div
                style={{ color: "red" }}
                className={styles["item-page__content_slider"]}
              >
                <img src={images[0].original} />
              </div>
            ) : (
              <Slider
                className={styles["item-page__content_slider"]}
                images={images}
              />
            )
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
                  {item?.description}
                  {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  dolorum animi molestias quae? Nihil libero iste dicta
                  inventore aspernatur id, quae, asperiores, quas repudiandae
                  dolorem cumque corrupti esse vitae dignissimos? Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Nam dolorum
                  animi molestias quae? */}
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
