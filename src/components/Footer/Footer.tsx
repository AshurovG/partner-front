import React from "react"
import styles from "./Footer.module.scss"

import Logo from "assets/images/logo_and_name.png"
import TelegramIcon from "components/Icons/TelegramIcon"
import WhatsAppIcon from "components/Icons/WhatsAppIcon"
import MailIcon from "components/Icons/MailIcon"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__inner_left}>
          <img className={styles.footer__inner_left_logo} src={Logo}></img>
          <div className={styles.footer__inner_left_socials}>
            <TelegramIcon />
            <WhatsAppIcon />
            <MailIcon />
          </div>
        </div>
        <div className={styles.footer__inner_right}>
          <h2 className={styles.footer__inner_right_title}>НАШИ КОНТАКТЫ</h2>
          <div className={styles.footer__inner_right_contacts}>
            <div>
              <h3>+7 (861) 203-38-33</h3>
              <h3>+7 (928) 402-23-09</h3>
              <h3>+7 (969) 303-11-11</h3>
            </div>
            <div>
              <h3>PARTNER.M2309@MAIL.RU</h3>
              <h3>PARTNER.M2309@MAIL.RU</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
