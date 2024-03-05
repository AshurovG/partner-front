import { useEffect } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"
import { useDispatch } from "react-redux"
import { setCurrentImageIdAction } from "slices/AdminSlice"

type ImageType = {
  id?: number
  original: string
  thumbnail: string
}

interface SliderProps {
  images: ImageType[]
  className: string
  isNotAutomatic?: boolean
}

const Slider: React.FC<SliderProps> = ({ images, className, isNotAutomatic }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(images[0])
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
        onSlide={isNotAutomatic ? (index) => dispatch(setCurrentImageIdAction(images[index].id)): undefined}
      />
    </div>
  )
}

export default Slider
