import React from "react"
import styles from "./BottlesBlock.module.scss"
import Back from "../../assets/images/bottles-block-background.png"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Animation = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "Tween",
      duration: 0.5,
    },
  },
}

const BottlesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={Animation}
          className={styles.block__inner_content}
        >
          <div>
            <h2 className={styles.block__inner_content_title}>
              СТЕКЛЯННАЯ ТАРА
            </h2>
            <p className={styles.block__inner_content_description}>
              Изготовление и поставка стеклянной тары для ликеро-водочной и
              вино-коньяной продукции
            </p>
          </div>

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
  )
}

export default BottlesBlock
