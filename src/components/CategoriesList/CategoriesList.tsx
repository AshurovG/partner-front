import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './CategoriesList.module.scss'
import { Categories } from '../../consts'
import Button from 'components/Button'

type  CategoriesProps = {
    // activeId?: number
    onClick: (id: number) => void
    className: string
}

const CategoriesList: React.FC<CategoriesProps> = ({ onClick, className }) => {
  const [activeId, setActiveId] = useState(3)

  const handleButtonClick = (id: number) => {
    onClick(id)
    setActiveId(id)
  }

  return (
    <div className={`${styles.categories} ${className}`}>
        {Categories.map((category) => (
            activeId === category.id ? <Button onClick={() => handleButtonClick(category.id)} className={styles.categories__btn} mode='inverse' isRedirecting={false}>
              {category.value}
            </Button>
            : <Button onClick={() => handleButtonClick(category.id)} className={styles.categories__btn} mode='dark' isRedirecting={false}>
              {category.value}
            </Button>
        ))}
    </div>
  )
}

export default CategoriesList