import React from "react"
import styles from "./DecorationsBlock.module.scss"
import Button from "components/Button"
import Decorations from "../../assets/images/decorations.png"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

import Dec1 from "../../assets/images/decoration1.png"
import Dec2 from "../../assets/images/decoration2.png"
import Dec3 from "../../assets/images/decoration3.png"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

const dataTop = [
  {
    url: Dec1,
  },
  {
    url: Dec2,
  },
  {
    url: Dec3,
  },
  {
    url: Dec1,
  },
  {
    url: Dec2,
  },
  {
    url: Dec3,
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <ArrowLeftIcon id="left-icon" />,
  nextArrow: <ArrowRightIcon id="right-icon" />,
  responsive: [
    {
      breakpoint: 620, // При ширине экрана меньше или равной 992px
      settings: {
        slidesToShow: 2, // Показывать 1 слайд
      },
    },
    {
      breakpoint: 460, // При ширине экрана меньше или равной 992px
      settings: {
        slidesToShow: 2, // Показывать 1 слайд
      },
    },
    {
      breakpoint: 340, // При ширине экрана меньше или равной 992px
      settings: {
        slidesToShow: 1, // Показывать 1 слайд
      },
    },

    // Добавьте больше точек останова по мере необходимости
  ],
}

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

const DecorationsBlock = () => {
  return (
    <div className={styles.block}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        className={styles.block__inner}
      >
        <h2 className={styles.block__inner_title}>
          МЕДАЛЬОНЫ, ЖЕТОНЫ,
          <br /> ШИЛЬДЫ, КУЛОНЫ
        </h2>
        <p className={styles.block__inner_description}>
          Мы специализируемся на производстве декоративных изделий и украшений,
          таких как медальоны, шильды, значки, брелоки и кулоны, которыT могут
          быть изготовлены как на двухсторонней клеевой основе, так и без нее.
          Наши изделия предназначены для оформления стеклянной Тары и упаковки.
          Мы работаем с различными материалами, включая по-лимерные материалы,
          вулканизированную резину, натуральную кожу и композиционную кожу, а
          также недрагоценные металлы.
        </p>
        <Link to="/decorations">
          <Button
            className={styles.block__inner_action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </Link>
        <div className={styles.slider}>
          <Slider {...settings} className={styles["slider_inner"]}>
            {dataTop.map((item, index) => {
              return (
                <div className={styles["slider_inner--card"]} key={index}>
                  <img src={item.url} alt="hero_img" />
                </div>
              )
            })}
          </Slider>
        </div>

        {/* <img src={Decorations} className={styles.block__inner_image}></img> */}
      </motion.div>
    </div>
  )
}

export default DecorationsBlock
