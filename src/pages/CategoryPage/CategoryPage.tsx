import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./CategoryPage.module.scss"
import { Link, Navigate, useParams } from "react-router-dom"
import { Categories } from "../../consts"
import axios from "axios"
import { Response } from "../../types"
import Card from "components/Card"
import Test from "../../assets/images/wine.jpg"
import MyLoader from "components/Skeletons/CardSkeleton"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

type Card = {
  product_id: number
  title: string
  url: string
  description: string
  category_id: number
}

type Category = {
  category_id: number
  title: string
  description: string
}

const CategoryPage = () => {
  const { categoryKey } = useParams()
  const [category, setCategory] = useState<Category>()
  const [cards, setCards] = useState<Card[]>([])
  const [categoryExists, setCategoryExists] = useState<boolean>(true)
  const [isItemsLoading, setIsItemsLoading] = useState<boolean>(true)

  useEffect(() => {
    const categoryObject = Categories.find((cat) => cat.key === categoryKey)
    if (!categoryObject) {
      setCategoryExists(false)
    } else {
      getCategoryItems(categoryObject.id)
    }
    setIsItemsLoading(true)
  }, [categoryKey])

  const getCategoryItems = async (categoryId: number) => {
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/categories/${categoryId}`,
        {
          method: "GET",
        }
      )
      setCards(response.data.products)
      setCategory(response.data)
      setTimeout(() => {
        setIsItemsLoading(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles["category-page"]}>
      <div className={styles["category-page__inner"]}>
        {!categoryExists ? (
          <Navigate to="/" replace />
        ) : (
          <>
            {isItemsLoading ? (
              <Skeleton
                className={styles["category-page__inner_title"]}
                width={500}
                style={{ marginBottom: 15 }}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <h1 className={styles["category-page__inner_title"]}>
                {category?.title}
              </h1>
            )}
            {isItemsLoading ? (
              <Skeleton
                style={{ marginTop: 5 }}
                className={styles["category-page__inner_description"]}
                count={3}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <div className={styles["category-page__inner_description"]}>
                {category?.description}
              </div>
            )}

            <div className={styles["category-page__inner_content"]}>
              {isItemsLoading ? (
                [...new Array(8)].map((_, index) => (
                  <Skeleton
                    highlightColor="#ac6823"
                    baseColor="#cc9966"
                    height={466}
                    key={index}
                  />
                ))
              ) : cards.length == 0 ? (
                <div style={{ color: "red" }}>пусто</div>
              ) : (
                cards.map((item: Card) => (
                  <Link to={`${item.product_id}`} key={item.product_id}>
                    <Card title={item.title} image={item.url}></Card>
                  </Link>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
