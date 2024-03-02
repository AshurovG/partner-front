import React from 'react'
import styles from './Card.module.scss'

type CardProps = {
    title: string
    image: string
}

const Card: React.FC<CardProps> = ({title, image}) => {
  return (
    <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
        <h3 className={styles.card__title}>{title}</h3>
    </div>
  )
}

export default Card