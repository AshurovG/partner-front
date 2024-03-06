import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './AdminProductPage.module.scss'
import { Response } from '../../types'
import EditIcon from 'components/Icons/EditIcon'
import BasketIcon from 'components/Icons/BasketIcon'
import Slider from "components/Slider"
import AddButton from 'components/Icons/AddButton'

type Image = {
    id: number
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
  const navigate = useNavigate()
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
            id: itemPic.product_item_id,
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

  const deleteProduct = async () => {
      try {
        const response: Response = await axios(
          `https://partnerev.ru/api/products/${id}`,
          {
            method: "DELETE",
          }
        )
        navigate('/admin')
      } catch (error) {
        console.log(error)
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
                  <div>
                    <h4 className={styles['product__page-subtitle']}>Название товара:</h4>
                    <p className={styles['product__page-text']}>{item?.title}</p>
                  </div>

                  <div>
                    <h4 className={styles['product__page-subtitle']}>Описание товара:</h4>
                    <p className={styles['product__page-text']}>{item?.description}</p>
                  </div>
                </div>

                <div className={styles['product__page-action']}>
                  <div className={styles['product__page-action-item']}>
                    <p className={styles['product__page-subtitle']}>Изменить информацию о товаре</p>
                    <EditIcon/>
                  </div>
                  
                  <div className={styles['product__page-action-item']}>
                    <p className={styles['product__page-subtitle']}>Удалить товар</p>
                    <BasketIcon onClick={deleteProduct}/>
                  </div>
                </div>
              </div>

              <div className={styles['product__page-gallery']}>
                {images.length !== 0 ? <div className={styles['product__page-gallery-content']}>
                    <Slider
                    className={styles["'product__page-gallery-slider"]}
                    images={images}
                    isNotAutomatic
                    />
                    <div className={styles['product__page-action']}>
                      <div className={styles['product__page-action-item']}>
                        <p className={styles['product__page-subtitle']}>
                          Добавить новое фото
                        </p>
                        <AddButton onClick={() => {}}/>
                      </div>

                      <div className={styles['product__page-action-item']}>
                        <p className={styles['product__page-subtitle']}>
                          Удалить текущее фото
                        </p>
                        <BasketIcon onClick={() => {}}/>
                      </div>
                    </div>
                  </div>
                :  <div>
                    <p className={styles['product__page-subtitle']}>На данный момент в галерее нет ни одного фото!</p>
                    <div className={styles['product__page-action-item']}>
                      <p className={styles['product__page-subtitle']}>
                        Хотите добавить новое?
                      </p>
                      <AddButton onClick={() => {}}/>
                    </div>
                  </div>
                }
              </div>
            </div>
        </div>
    )
}

export default AdminProductPage