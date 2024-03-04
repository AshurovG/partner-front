import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./CategoryPage.module.scss"
import { Link, useParams } from "react-router-dom"
import { Categories } from "../../consts"
import axios from "axios"
import { Response } from "../../types"
import Card from "components/Card"
import Test from "../../assets/images/wine.jpg"

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
  const categoryObject = Categories.find((cat) => cat.key === categoryKey)

  const getCategoryItems = async () => {
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/categories/${categoryObject?.id}`,
        {
          method: "GET",
        }
      )
      setCards(response.data.products)
      setCategory(response.data)
      console.log(response.data.products == undefined)
      console.log(category)
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    console.log(categoryKey)
    getCategoryItems()
  }, [categoryKey])

  return (
    <div className={styles["category-page"]}>
      <div className={styles["category-page__inner"]}>
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
      </div>
    </div>
  )
}

export default CategoryPage
