// import React from "react"
// import styles from "./Slider.module.scss"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"

const images = [
  {
    original:
      "https://catherineasquithgallery.com/uploads/posts/2021-02/1614397794_20-p-bokali-na-temnom-fone-22.jpg",
    thumbnail:
      "https://catherineasquithgallery.com/uploads/posts/2021-02/1614397794_20-p-bokali-na-temnom-fone-22.jpg",
    // thumbnailClass: styles.thumbnailImage,
  },
  {
    original: "https://invent-prom.ru/wp-content/uploads/2020/01/94327_1.jpg",
    thumbnail: "https://invent-prom.ru/wp-content/uploads/2020/01/94327_1.jpg",
    // thumbnailClass: styles.thumbnailImage,
  },
  {
    original:
      "https://catherineasquithgallery.com/uploads/posts/2021-02/1614397794_20-p-bokali-na-temnom-fone-22.jpg",
    thumbnail:
      "https://catherineasquithgallery.com/uploads/posts/2021-02/1614397794_20-p-bokali-na-temnom-fone-22.jpg",
    // thumbnailClass: styles.thumbnailImage,
  },
  {
    original: "https://invent-prom.ru/wp-content/uploads/2020/01/94327_1.jpg",
    thumbnail: "https://invent-prom.ru/wp-content/uploads/2020/01/94327_1.jpg",
    // thumbnailClass: styles.thumbnailImage,
  },
]

const Slider = () => {
  return (
    <div style={{ height: 1000, width: 1000 }}>
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        // showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={4000}
        showNav={true} // Ensure navigation buttons are displayed
      />
    </div>
  )
}

export default Slider
