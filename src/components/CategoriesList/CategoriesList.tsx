import React from 'react'
import clsx from 'clsx'
import styles from './CategoriesList.module.scss'
import { Categories } from '../../consts'
import Button from 'components/Button'

type  CategoriesProps = {
    activeId?: number
    onClick: (id: number) => void
    className: string
}

const CategoriesList: React.FC<CategoriesProps> = ({ activeId, onClick, className }) => {
  return (
    <div className={`${styles.categories} ${className}`}>
        {Categories.map((category) => (
            <Button onClick={() => onClick(category.id)} className={styles.categories__btn} mode='dark' isRedirecting={false}>
                {category.value}
            </Button>
        ))}
    </div>
  )
}

export default CategoriesList