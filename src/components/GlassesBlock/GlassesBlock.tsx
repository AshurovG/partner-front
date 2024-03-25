import styles from "./GlassesBlock.module.scss"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import wineImage from "../../assets/images/wine.jpg"
import glassImage from "../../assets/images/glass.jpg"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"

import glass1 from "../../assets/images/glasses_block_assets/glass1.png"
import glass2 from "../../assets/images/glasses_block_assets/glass2.png"
import glass3 from "../../assets/images/glasses_block_assets/glass3.png"
import glass4 from "../../assets/images/glasses_block_assets/glass4.png"
import glass5 from "../../assets/images/glasses_block_assets/glass5.png"

const mockImages = [
  {
    original: glass1,
    thumbnail: glass1,
  },
  {
    original: glass2,
    thumbnail: glass2,
  },
  {
    original: glass3,
    thumbnail: glass3,
  },
  {
    original: glass4,
    thumbnail: glass4,
  },
  {
    original: glass5,
    thumbnail: glass5,
  },
]

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

const GlassesBlock = () => {
  return (
    <div className={styles.block}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        className={styles.block__inner}
      >
        <div className={styles.block__inner_content}>
          <h2 className={styles.block__inner_content_title}>
            СТЕКЛЯННАЯ ПОСУДА <br /> БОКАЛЫ & РЮМКИ
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
                mode="dark"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.block__inner_image}>
          <ImageGallery
            items={mockImages}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={2500}
            showNav={false}
            slideDuration={1000}
          />
        </div>
        {/* <img src={Glasses} className={styles.block__inner_image}></img> */}
      </motion.div>
    </div>
  )
}

export default GlassesBlock
