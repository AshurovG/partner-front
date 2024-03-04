import React from "react"
import styles from "./LocksBlock.module.scss"
import { Link } from "react-router-dom"
import Button from "components/Button"
import { motion } from "framer-motion"

const Animation = {
  hidden: { y: 300, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: {
    type: "Tween",
    duration: 10,
  },
}

const LocksBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={Animation}
          className={styles.block__inner_content}
        >
          <h2 className={styles.block__inner_content_title}>
            УКУПОРОЧНЫЕ УСТРОЙСТВА
          </h2>
          <p className={styles.block__inner_content_description}>
            Мы специализируемся на поставках эксклюзивных укупорочных средств
            для стеклянной тары
          </p>
          <div>
            <Link to="/locks">
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

export default LocksBlock
