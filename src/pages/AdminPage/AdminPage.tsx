import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import styles from './AdminPage.module.scss'
import CategoriesList from 'components/CategoriesList'
import Card from 'components/Card'
import AddButton from 'components/Icons/AddButton'
import ModalWindow from 'components/ModalWindow'
import ProductForm from 'components/PorductForm/PorductForm'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

type Card = {
    product_id: number
    title: string
    url: string
    description: string
    category_id: number
  }

const AdminPage = () => {
    const [cards, setCards] = useState<Card[]>([])
    const [isCreateWindowOpened, setIsCreateWindowOpened] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState(3)
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category_id');
    
    const getProducts = async (id: number) => {
        try {
            const response = await axios(`https://partnerev.ru/api/categories/${id}`)
            setCards(response.data.products)
            setSelectedCategoryId(id)
        } catch (error) {
            throw error
        }
    }

    const postProduct = async (
        title: string,
        description: string,
        file: File | null
      ) => {
       
        try {
          const formData = new FormData()
        //   if (token) {
        //     formData.append("jwt", token)
        //   }
          formData.append("title", title)
          formData.append("description", description)
          formData.append("category_id", selectedCategoryId.toString());;
          if (file && file.size > 5 * 1024 * 1024) {
            toast.error("Размер фотографии должен не превышать  5 МБ")
            return
          } else if (file) {
            formData.append("file", file)
          }
          await axios("https://partnerev.ru/api/products/", {
            method: "POST",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        //   setIsCardsLoading(true)
          toast.success("Объект создан успешно!")
    
          getProducts(selectedCategoryId)
          setIsCreateWindowOpened(false)
        } catch (error) {
          toast.error("Размер фотографии должен не превышать 5 МБ")
          throw error
        }
      }

  const handleCategoryClick = (id: number) => {
    // history.push(`/admin?category_id=${id}`);
    navigate(`/admin?category_id=${id}`);
    getProducts(id);
  };

  useEffect(() => {
    if (categoryId) {
      getProducts(Number(categoryId)); // Предполагается, что getProducts ожидает числовой ID
    }
 }, [categoryId]);

  return (
      <div className={styles.admin__page}>
          <div className={styles['admin__page-wrapper']}>
              <h1 className={styles['admin__page-title']}>Управление сайтом</h1>
              <h4 className={styles['admin__page-subtitle']}>Здесь вы можете обновлять информацию о вашем сайте!</h4>
              <div className={styles['admin__page-action']}>
                  <h4 className={styles['admin__page-text']}>Хотите добавить новый товар?</h4>
                  <AddButton onClick={() => {setIsCreateWindowOpened(true)}}/>
              </div>
              <div className={styles['admin__page-content']}>
                  <CategoriesList className={styles['admin__page-list']} onClick={handleCategoryClick} />
                  <div className={styles['admin__page-cards']}>
                      {cards.map((card: Card) => (
                          <Link to={`/products/${card.product_id}`}><Card title={card.title} image={card.url} /></Link>
                      ))}
                  </div>
              </div>
          </div>

          <ModalWindow className={styles['admin__page-modal']} active={isCreateWindowOpened} handleBackdropClick={() => setIsCreateWindowOpened(false)}>
              <ProductForm 
                  isEditing={false}
                  onSubmit={postProduct}
                  title=""
                  description=""
                  fileTitle=""
                  active={isCreateWindowOpened}/>
          </ModalWindow>
      </div>
  )
}

export default AdminPage