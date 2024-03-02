import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "pages/MainPage"
import Header from "components/Header"
import styles from "./App.module.scss"
import Footer from "components/Footer"
import ContactForm from "components/ContactForm"
import ItemPage from "pages/ItemPage"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemPage />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
