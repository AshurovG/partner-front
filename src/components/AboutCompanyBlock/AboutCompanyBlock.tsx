import React from "react"
import styles from "./AboutCompanyBlock.module.scss"
import Logo from "../../assets/images/about-company-logo.png"

const AboutCompanyBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <img src={Logo} className={styles.block__inner_logo}></img>
        <p className={styles.block__inner_description}>
          Группа компаний “Партнер” - ведущий поставщик эксклюзивных
          комплектующих материалов, используемых в производстве килеро-водочной
          и вино-коньячной продукции.
        </p>
      </div>
    </div>
  )
}

export default AboutCompanyBlock
