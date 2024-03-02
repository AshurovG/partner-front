import * as React from "react"
import { IconProps } from "../Icon"

const WhatsAppIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
}) => {
  let classes = `icon_wrapper arrow_down_icon ${className}`
  return (
    <svg
      viewBox="0 0 48 48"
      onClick={onClick}
      color={color}
      width={width ? width : 48}
      height={height ? height : 48}
      className={classes}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.1794 32.4785C36.613 34.0476 34.3617 35.3456 32.5663 35.7252C31.3373 35.9806 29.7345 36.1826 24.3342 33.9924C18.2689 31.5329 9.84651 22.7722 9.84651 16.9423C9.84651 13.9744 11.5949 10.5185 14.6523 10.5185C16.1234 10.5185 16.4477 10.5465 16.9318 11.6831C17.4981 13.0221 18.8799 16.3211 19.0444 16.6593C19.7236 18.0466 18.3535 18.8587 17.3594 20.0666C17.0422 20.4301 16.6827 20.8232 17.0845 21.4996C17.484 22.1622 18.8658 24.3663 20.8962 26.1355C23.5188 28.4224 25.6455 29.1525 26.4069 29.4631C26.9733 29.6932 27.6501 29.6396 28.0637 29.2071C28.5878 28.6526 29.2387 27.7327 29.9014 26.8262C30.369 26.1774 30.9636 26.0964 31.5864 26.3265C32.007 26.4691 37.3532 28.8991 37.5788 29.2879C37.7457 29.5709 37.7457 30.9094 37.1794 32.4785ZM23.5047 0H23.4929C10.5374 0 0 10.3163 0 23C0 28.0293 1.65677 32.6953 4.47442 36.4799L1.54631 45.0263L10.5774 42.2019C14.2927 44.6084 18.7271 46 23.5047 46C36.4602 46 47 35.6837 47 23C47 10.3163 36.4602 0 23.5047 0Z"
        fill="#CC9966"
      />
    </svg>
  )
}
export default WhatsAppIcon