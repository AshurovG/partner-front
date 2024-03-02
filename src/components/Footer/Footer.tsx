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
            <a>
              <TelegramIcon />
            </a>
            <a>
              <WhatsAppIcon />
            </a>
            <a>
              <MailIcon />
            </a>
          </div>
        </div>
        <div className={styles.footer__inner_right}>
          <h2 className={styles.footer__inner_right_title}>НАШИ КОНТАКТЫ</h2>
          <div className={styles.footer__inner_right_contacts}>
            <div>
              <a href="tel:+7-861-203-38-33">+7 (861) 203-38-33</a>
              <a href="tel:+7-928-402-23-09">+7 (928) 402-23-09</a>
              <a href="tel:+7-969-303-11-11">+7 (969) 303-11-11</a>
            </div>
            <div>
              <a href="mailto:PARTNER.M2309@MAIL.RU">PARTNER.M2309@MAIL.RU</a>
              <a href="mailto:PARTNER.M2309@MAIL.RU">PARTNER.M2309@MAIL.RU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
