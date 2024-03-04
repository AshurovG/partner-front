import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./CategoryPage.module.scss"
import { Link, Navigate, useParams } from "react-router-dom"
import { Categories } from "../../consts"
import axios from "axios"
import { Response } from "../../types"
import Card from "components/Card"
import Test from "../../assets/images/wine.jpg"
import MyLoader from "components/Skeletons/CardSkeleton"
import Skeleton from "components/Skeletons/CardSkeleton"

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

  useEffect(() => {
    const categoryObject = Categories.find((cat) => cat.key === categoryKey)
    if (!categoryObject) {
      setCategoryExists(false)
    } else {
      getCategoryItems(categoryObject.id)
    }
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
            <h1 className={styles["category-page__inner_title"]}>
              {category?.title}
            </h1>
            <div className={styles["category-page__inner_description"]}>
              {category?.description}
            </div>
            <div className={styles["category-page__inner_content"]}>
              {cards.length != 0 ? (
                cards.map((item: Card) => (
                  <Link to={`${item.product_id}`} key={item.product_id}>
                    <Card title={item.title} image={item.url}></Card>
                  </Link>
                ))
              ) : (
                <div style={{ color: "red" }}>пусто</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
