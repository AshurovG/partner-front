import React from "react"
import styles from "./DecorationsBlock.module.scss"
import Button from "components/Button"
import Decarations from "../../assets/images/decorations.png"
import { Link } from "react-router-dom"

const DecorationsBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <h2 className={styles.block__inner_title}>
          МЕДАЛЬОНЫ, ЖЕТОНЫ,
          <br /> ШИЛЬДЫ, КУЛОНЫ
        </h2>
        <p className={styles.block__inner_description}>
          Мы специализируемся на производстве декоративных изделий и украшений,
          таких как медальоны, шильды, значки, брелоки и кулоны, которыT могут
          быть изготовлены как на двухсторонней клеевой основе, так и без нее.
          Наши изделия предназначены для оформления стеклянной Тары и упаковки.
          Мы работаем с различными материалами, включая по-лимерные материалы,
          вулканизированную резину, натуральную кожу и композиционную кожу, а
          также недрагоценные металлы.
        </p>
        <Link to="/decorations">
          <Button
            className={styles.block__inner_action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </Link>

        <img src={Decarations} className={styles.block__inner_image}></img>
      </div>
    </div>
  )
}

export default DecorationsBlock
