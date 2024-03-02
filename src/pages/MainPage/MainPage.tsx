// import React from "react"
import styles from "./MainPage.module.scss"
import Slider from "components/Slider"
import ContactForm from "components/ContactForm"
import AboutCompanyBlock from "components/AboutCompanyBlock"
import BottlesBlock from "components/BottlesBlock"
import { useLayoutEffect } from "react"
import LocksBlock from "components/LocksBlock"

const MainPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles["main-page"]}>
      <AboutCompanyBlock />
      <BottlesBlock />
      <LocksBlock />
    </div>
  )
}

export default MainPage
