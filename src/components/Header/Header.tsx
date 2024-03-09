import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./Header.module.scss"
import useScrollDirection from "../../utils/HeaderHook"
import BurgerIcon from "components/Icons/BurgerIcon"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { scroller, Link as ScrollLink } from "react-scroll"
import { scroller } from "react-scroll"

import { motion, AnimatePresence } from "framer-motion"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

import Bottles from "../../assets/images/bottles-block-background.png"
import Decorations from "../../assets/images/decs.png"
import Simple from "../../assets/images/simple_package.png"
import Complex from "../../assets/images/complex_package.png"
import Glasses from "../../assets/images/gl.png"

// import Logo from "../../assets/images/partner_logo.svg"

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
  const menuRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement // Приведение типа для доступа к свойствам DOM
      const isLeftIconClicked = target.id === "left-icon"
      const isRightIconClicked = target.id === "right-icon"

      if (
        e.target &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !isLeftIconClicked &&
        !isRightIconClicked
      ) {
        setIsSubmenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [])

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
    prevArrow: <ArrowLeftIcon id="left-icon" />,
    nextArrow: <ArrowRightIcon id="right-icon" />,
    responsive: [
      {
        breakpoint: 520, // При ширине экрана меньше или равной 992px
        settings: {
          slidesToShow: 2.2, // Показывать 1 слайд
        },
      },
      {
        breakpoint: 460, // При ширине экрана меньше или равной 992px
        settings: {
          slidesToShow: 1.8, // Показывать 1 слайд
        },
      },
      {
        breakpoint: 400, // При ширине экрана меньше или равной 992px
        settings: {
          slidesToShow: 1.6, // Показывать 1 слайд
        },
      },
      {
        breakpoint: 350, // При ширине экрана меньше или равной 992px
        settings: {
          slidesToShow: 1.4, // Показывать 1 слайд
        },
      },

      // Добавьте больше точек останова по мере необходимости
    ],
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

            <div className={styles.header__inner_contact}>
              <a href="tel:+7-861-203-38-33">+7 (861) 203-38-33</a>
            </div>
          </div>
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.div
                className={styles.submenu}
                variants={submenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                ref={menuRef}
              >
                <div className={styles.submenu__info}>
                  <Link to="/">
                    <h2
                      onClick={() => {
                        setIsSubmenuOpen(false)
                      }}
                    >
                      Главная
                    </h2>
                  </Link>

                  <h2
                    onClick={() => {
                      scroller.scrollTo("form", {
                        smooth: true,
                        duration: 1500,
                      })
                      setIsSubmenuOpen(false)
                    }}
                  >
                    Задать вопрос
                  </h2>

                  <h2
                    onClick={() => {
                      scroller.scrollTo("contacts", {
                        smooth: true,
                        duration: 1500,
                      })
                      setIsSubmenuOpen(false)
                    }}
                  >
                    Контакты
                  </h2>
                  <Link to="/admin?category_id=3">
                    <h2
                      onClick={() => {
                        setIsSubmenuOpen(false)
                      }}
                    >
                      Управление сайтом
                    </h2>
                  </Link>
                </div>
                <div className={styles.submenu__slider}>
                  <Slider
                    ref={sliderRef}
                    {...settings}
                    className={styles["submenu__slider_inner"]}
                  >
                    {dataTop.map((item, index) => {
                      return (
                        <Link to={`/${item.key}`}>
                          <div
                            onClick={() => {
                              setIsSubmenuOpen(false)
                            }}
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
