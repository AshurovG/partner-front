import React from "react"
import styles from "./PackagesBlock.module.scss"
import Button from "components/Button"

const PackagesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.card}>
          <img className={styles.card_image}></img>
          <h2 className={styles.card__title}></h2>
          <p className={styles.card__description}></p>
          <Button
            className={styles.card__action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </div>
        <div className=""></div>
        <div className={styles.card}>
          <img className={styles.card_image}></img>
          <h2 className={styles.card__title}></h2>
          <p className={styles.card__description}></p>
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
