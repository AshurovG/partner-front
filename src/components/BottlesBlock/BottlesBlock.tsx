import React from "react"
import styles from "./BottlesBlock.module.scss"
import Back from "../../assets/images/bottles-block-background.png"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Animation = {
  hidden: { y: 300, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: {
    type: "Tween",
    duration: 10,
  },
}

const BottlesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__inner_content}>
          <motion.div initial="hidden" animate="visible" variants={Animation}>
            <h2 className={styles.block__inner_content_title}>
              СТЕКЛЯННАЯ ТАРА
            </h2>
            <p className={styles.block__inner_content_description}>
              Изготовление и поставка стеклянной тары для ликеро-водочной и
              вино-коньяной продукции
            </p>
            <div>
              <Link to="/bottles">
                <Button
                  className={styles.block__inner_content_action}
                  isRedirecting={true}
                  mode="dark"
                >
                  Подробнее
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BottlesBlock
