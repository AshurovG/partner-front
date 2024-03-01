import React, { useState } from "react"
import styles from "./Header.module.scss"
import useScrollDirection from "../../utils/HeaderHook"
import BurgerIcon from "components/Icons/BurgerIcon"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion, AnimatePresence } from "framer-motion"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

const dataTop = [
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Стеклянная тара",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Укупорочные устройства",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Медальоны и жетоны",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Бокалы например",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Простая упаковка",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Сложная упаковка",
  },
]

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  const headerClass =
    scrollDirection === "up" ? styles.headerUp : styles.headerDown

  const submenuVariants = {
    open: {
      opacity: 1,
      height: "auto", // Adjust based on your content
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowLeftIcon />,
    nextArrow: <ArrowRightIcon />,
  }

  return (
    <header
      className={`${headerClass} ${isSubmenuOpen ? styles.expanded : ""}`}
    >
      <div className={styles.header__inner}>
        <div
          className={styles.header__inner_menu}
          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
        >
          <h2>MENU</h2>
          {isSubmenuOpen === false ? (
            <BurgerIcon
              className={styles.burger__icon}
              onClick={() => setIsSubmenuOpen(true)}
            />
          ) : (
            <div
              className={styles.cancel__icon}
              onClick={() => setIsSubmenuOpen(false)}
            ></div>
          )}
        </div>
        <div className={styles.header__inner_contact}>+7 (861) 203-38-33</div>
      </div>
      <AnimatePresence>
        {isSubmenuOpen && (
          <motion.div
            className={styles.submenu}
            variants={submenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.submenu__info}>
              <h2>Задать вопрос</h2>
              <h2>Контакты</h2>
            </div>
            <div className={styles.submenu__slider}>
              <Slider {...settings} className={styles["submenu__slider_inner"]}>
                {dataTop.map((item, index) => {
                  return (
                    <div
                      className={styles["submenu__slider_inner--card"]}
                      key={index}
                    >
                      <img src={item.url} alt="hero_img" />

                      <h2>{item.title}</h2>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
