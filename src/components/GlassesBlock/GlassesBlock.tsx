import React from "react"
import styles from "./GlassesBlock.module.scss"
import Button from "components/Button"
import Glasses from "../../assets/images/glasses.png"
import { Link } from "react-router-dom"

const GlassesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__inner_content}>
          <h2 className={styles.block__inner_content_title}>
            СТЕКЛЯННАЯ ТАРА <br /> БОКАЛЫ & РЮМКИ
          </h2>
          <p className={styles.block__inner_content_description}>
            Возможно изготовление по вашим чертежам или разбработка с нуля
            нашими специалистами
          </p>
          <div>
            <Link to="/glasses">
              <Button
                className={styles.block__inner_content_action}
                isRedirecting={true}
                mode="inverse"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
        <img src={Glasses} className={styles.block__inner_image}></img>
      </div>
    </div>
  )
}

export default GlassesBlock
