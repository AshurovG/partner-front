import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./CategoryPage.module.scss";
import { Link, Navigate, useParams } from "react-router-dom";
import { Categories } from "../../consts";
import axios from "axios";
import { Response } from "../../types";
import Card from "components/Card";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ModalWindow from "components/ModalWindow";

type Card = {
  product_id: number;
  title: string;
  url: string;
  description: string;
  category_id: number;
};

type Category = {
  category_id: number;
  title: string;
  description: string;
};

const CategoryPage = () => {
  const { categoryKey } = useParams();
  const [category, setCategory] = useState<Category>();
  const [cards, setCards] = useState<Card[]>([]);
  const [categoryExists, setCategoryExists] = useState<boolean>(true);
  const [isItemsLoading, setIsItemsLoading] = useState<boolean>(true);
  const [isModalImageOpened, setIsModalImageOpened] = useState(false);
  // const [itemClick, setItemClick] = useState<Card>()
  const [itemClick, _] = useState<Card>();

  // const [isCardModal, setIsCardModal] = useState<boolean>(false)

  useEffect(() => {
    const categoryObject = Categories.find((cat) => cat.key === categoryKey);
    if (!categoryObject) {
      setCategoryExists(false);
    } else {
      getCategoryItems(categoryObject.id);
    }
    setIsItemsLoading(true);
  }, [categoryKey]);

  // }

  const getCategoryItems = async (categoryId: number) => {
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/categories/${categoryId}`,
        {
          method: "GET",
        }
      );
      setCards(response.data.products);
      setCategory(response.data);
      setTimeout(() => {
        setIsItemsLoading(false);
      }, 300);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["category-page"]}>
      <div className={styles["category-page__inner"]}>
        {!categoryExists ? (
          <Navigate to="/" replace />
        ) : (
          <>
            {isItemsLoading ? (
              <Skeleton
                className={styles["category-page__inner_title"]}
                style={{ marginBottom: 15, maxWidth: "400px" }}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <h1 className={styles["category-page__inner_title"]}>
                {category?.title}
              </h1>
            )}
            {isItemsLoading ? (
              <Skeleton
                style={{ marginTop: 5 }}
                className={styles["category-page__inner_description"]}
                count={3}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <div className={styles["category-page__inner_description"]}>
                {/* {category?.description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, magnam nemo? Tempore aspernatur neque vel laborum
                molestias autem ipsam pariatur quod, sunt minima nesciunt illum
                optio minus? Optio, magni impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptate, magnam nemo?
              </div>
            )}

            <div className={styles["category-page__inner_content"]}>
              {isItemsLoading ? (
                [...new Array(8)].map((_, index) => (
                  <Skeleton
                    highlightColor="#ac6823"
                    baseColor="#cc9966"
                    height={300}
                    key={index}
                  />
                ))
              ) : cards.length == 0 ? (
                <div style={{ color: "red" }}>пусто</div>
              ) : (
                cards.map((item: Card) => {
                  return (
                    <Link to={`${item.product_id}`} key={item.product_id}>
                      <Card title={item.title} image={item.url} />
                    </Link>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
      <ModalWindow
        handleBackdropClick={() => {
          setIsModalImageOpened(false);
        }}
        active={isModalImageOpened}
      >
        <img className={styles.modal_image} src={itemClick?.url}></img>
      </ModalWindow>
    </div>
  );
};

export default CategoryPage;
