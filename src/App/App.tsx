import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "pages/MainPage"
import AshurovCardPage from "pages/AshurovCardPage"
import RasulovCardPage from "pages/RasulovCardPage"
import DerevitskayaCardPage from "pages/DerevitskayaCardPage"
import Header from "components/Header"
import styles from "./App.module.scss"
import Footer from "components/Footer"
import ContactForm from "components/ContactForm"
import ItemPage from "pages/ItemPage"
import AuthPage from "pages/AuthPage"
import AboutCompanyBlock from "components/AboutCompanyBlock"

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/item" element={<ItemPage />}></Route>
          <Route path="/ashurovvitaly" element={<AshurovCardPage />}></Route>
          <Route path="/rasulovelshan" element={<RasulovCardPage />}></Route>
          <Route path="/derevitskayaevgenia"element={<DerevitskayaCardPage />}></Route>
          <Route path='/login' element={<AuthPage/>}/>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        <ContactForm />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
