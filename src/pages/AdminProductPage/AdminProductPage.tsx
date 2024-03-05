import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './AdminProductPage.module.scss'
import {Response} from '../../types'
import Card from 'components/Card'

type Image = {
    original: string
    thumbnail: string
  }
  
  type ItemPics = {
    product_item_id: number
    url: string
    product_id: number
  }
  
  type Item = {
    product_id: number
    title: string
    url: string
    description: string
    category_id: number
    items: ItemPics[]
  }

const AdminProductPage = () => {
  const { id } = useParams()
    const [item, setItem] = useState<Item>()
    const [images, setImages] = useState<Image[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(true) // Добавляем состояние для отслеживания загрузки

    const getItem = async () => {
        try {
          const response: Response = await axios(
            `https://partnerev.ru/api/products/${id}`,
            {
              method: "GET",
            }
          )
    
          setItem(response.data)
          setImages(
            response.data.items.map((itemPic: ItemPics) => ({
              original: itemPic.url,
              thumbnail: itemPic.url,
            }))
          )
        //   setIsLoading(false) // Устанавливаем состояние загрузки в false после получения данных
        } catch (error) {
          console.log(error)
        //   setIsLoading(false) // Также устанавливаем состояние загрузки в false в случае ошибки
        }
    }

    useEffect(() => {
      getItem()
    }, [])

    return (
        <div className={styles.product__page}>
          <h1 className={styles['product__page-title']}>Редактирование текущего товара</h1>
            <div className={styles['product__page-wrapper']}>
              <div className={styles['product__page-content']}>
                <img className={styles['product__page-image']} src={item?.url} alt="" />
                <div className={styles['product__page-info']}>
                  <h4 className={styles['product__page-subtitle']}>Название товара:</h4>
                  <p className={styles['product__page-text']}>{item?.title}</p>
                  <h4 className={styles['product__page-subtitle']}>Описание товара:</h4>
                  <p className={styles['product__page-text']}>{item?.description}</p>
                </div>
              </div>
              
            </div>
        </div>
    )
}

export default AdminProductPage