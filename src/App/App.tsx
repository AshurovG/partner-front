import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "pages/MainPage"
import Header from "components/Header"
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
