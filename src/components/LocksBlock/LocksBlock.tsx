import React from "react"
import styles from "./LocksBlock.module.scss"
import { Link } from "react-router-dom"
import Button from "components/Button"

const LocksBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__inner_content}>
          <h2 className={styles.block__inner_content_title}>
            УКУПОРОЧНЫЕ УСТРОЙСТВА
          </h2>
          <p className={styles.block__inner_content_description}>
            Мы специализируемся на поставках эксклюзивных укупорочных средств
            для стеклянной тары
          </p>
          <div>
            <Link to="item">
              <Button
                className={styles.block__inner_content_action}
                isRedirecting={true}
                mode="dark"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocksBlock
