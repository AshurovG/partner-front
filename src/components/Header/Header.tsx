import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./Header.module.scss"
import useScrollDirection from "../../utils/HeaderHook"
import BurgerIcon from "components/Icons/BurgerIcon"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion, AnimatePresence } from "framer-motion"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

import Bottles from "../../assets/images/bottles-block-background.png"
import Decorations from "../../assets/images/decs.png"
import Simple from "../../assets/images/simple_package.png"
import Complex from "../../assets/images/complex_package.png"
import Glasses from "../../assets/images/gl.png"

const dataTop = [
  {
    url: Bottles,
    title: "Стеклянная тара",
    key: "bottles",
  },
  {
    url: Simple,
    title: "Простая упаковка",
    key: "simple-package",
  },
  {
    url: Complex,
    title: "Сложная упаковка",
    key: "complex-package",
  },
  {
    url: Decorations,
    title: "Медальоны и жетоны",
    key: "decorations",
  },
  {
    url: Glasses,
    title: "Бокалы & Рюмки",
    key: "glasses",
  },
  {
    url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/650/590/078/112/220/37/600009463326b7.jpeg",
    title: "Укупорочные устройства",
    key: "locks",
  },
]

const Header = () => {
  const location = useLocation()
  const showHeader = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
  ].includes(location.pathname)
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
    <>
      {showHeader ? (
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
            <Link to="/">
              <div className={styles.header__inner_contact}>
                +7 (861) 203-38-33
              </div>
            </Link>
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
                  <Slider
                    {...settings}
                    className={styles["submenu__slider_inner"]}
                  >
                    {dataTop.map((item, index) => {
                      return (
                        <Link to={`/${item.key}`}>
                          <div
                            className={styles["submenu__slider_inner--card"]}
                            key={index}
                          >
                            <img src={item.url} alt="hero_img" />

                            <h2>{item.title}</h2>
                          </div>
                        </Link>
                      )
                    })}
                  </Slider>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      ) : null}
    </>
  )
}

export default Header
