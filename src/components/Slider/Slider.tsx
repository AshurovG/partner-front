// import React from "react"
// import styles from "./Slider.module.scss"
import { useEffect } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"

type ImageType = {
  original: string
  thumbnail: string
}

interface SliderProps {
  images: ImageType[]
  className: string
  isNotAutomatic?: boolean
}

const Slider: React.FC<SliderProps> = ({ images, className, isNotAutomatic }) => {
  useEffect(() => {
    console.log(images)
  }, [images])
  return (
    <div className={className}>
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        // showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={!isNotAutomatic}
        slideInterval={4000}
        showNav={true}
      />
    </div>
  )
}

export default Slider
