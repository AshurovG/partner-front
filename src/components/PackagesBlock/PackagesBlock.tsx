import React from "react"
import styles from "./PackagesBlock.module.scss"
import Button from "components/Button"
import Complex from "../../assets/images/complex_package.png"
import Simple from "../../assets/images/simple_package.png"

const PackagesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.card}>
          <img src={Simple} className={styles.card__image}></img>
          <h2 className={styles.card__title}>Простая упаковка</h2>
          <p className={styles.card__description}>
            Все виды и типы упаковки из различных видов картона
          </p>
          <Button
            className={styles.card__action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.card}>
          <img src={Complex} className={styles.card__image}></img>
          <h2 className={styles.card__title}>Премиум упаковка</h2>
          <p className={styles.card__description}>
            Подарочные упаковки с использованием фурнитуры высокого качества
          </p>
          <Button
            className={styles.card__action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PackagesBlock
