// import React from "react"
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

// import Logo from "assets/images/клубочек золотой.png";
import TelegramIcon from "components/Icons/TelegramIcon";
import WhatsAppIcon from "components/Icons/WhatsAppIcon";
import MailIcon from "components/Icons/MailIcon";
import ContactForm from "components/ContactForm";

const Footer = () => {
  const location = useLocation();
  const showFooter = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
  ].includes(location.pathname);

  return (
    <>
      {showFooter ? (
        <footer id="contacts" className={styles.footer}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__inner_info}>
              {/* <div className={styles.footer__inner_left}> */}
              {/* <img className={styles.footer__inner_left_logo} src={Logo}></img> */}
              {/* <h2 className={styles.footer__inner_left_name}>ПАРТНЕР</h2> */}

              <p className={styles.footer__inner_text}>
                Мы рады помочь, если у Вас возникли вопросы или предложения,
                заполните форму. Наши сотрудники свяжутся с Вами в ближайшее
                время!
              </p>
              <div className={styles.footer__inner_right}>
                <h2 className={styles.footer__inner_right_title}>
                  НАШИ КОНТАКТЫ
                </h2>
                <div className={styles.footer__inner_right_contacts}>
                  <div>
                    <a href="tel:+7-861-203-38-33">+7 (861) 203-38-33</a>
                    <a href="tel:+7-928-402-23-09">+7 (928) 402-23-09</a>
                    <a href="tel:+7-969-303-11-11">+7 (969) 303-11-11</a>
                  </div>
                  <div>
                    <a href="mailto:PARTNER.M2309@MAIL.RU">
                      partner.m2309@mail.ru
                    </a>
                    {/* <a href="mailto:PARTNER.M2309@MAIL.RU">
                    partner.m2309@mail.ru
                  </a> */}
                  </div>
                </div>

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
            </div>
            <div>
              <p className={styles.footer__inner_text_mobile}>
                Мы рады помочь, если у Вас возникли вопросы или предложения,
                заполните форму. Наши сотрудники свяжутся с Вами в ближайшее
                время!
              </p>
              <ContactForm />
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
