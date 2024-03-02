import styles from './DerevitskayaCardPage.module.scss'
import phone from 'assets/cardsImages/phone_s.svg'
import email from 'assets/cardsImages/email_s.svg'
import logo from 'assets/cardsImages/logo_s.svg'
import whatsapp from 'assets/cardsImages/whatsapp_s.svg'
import telegram from 'assets/cardsImages/telegram_s.svg'
import location from 'assets/cardsImages/location_s.svg'

const DerevitskayaCardPage = () => {
  return (
    <div className={styles.director_card}>
    <div className={styles.card}>
        <div className={styles.front_card}>
            <div className={styles.card_wrapper}>
                <div className={styles.front_card_wrapper}>
                    <div className={styles.front_card_info}>

                        <div className={styles.card_container}>
                            <img className={styles.card_img} src={phone} alt=""/>
                            <div className={styles.img_text}>
                                <a href="tel:+79885222477">+7 (988) 522-24-77</a><br/>
                                <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                            </div>
                        </div>

                        <div className={styles.card_container}>
                            <img className={styles.card_img} src={email} alt=""/>
                            <div className={styles.img_text}>
                                <a href="mailto:partner.k2309@mail.ru">partner.k2309@mail.ru</a>
                            </div>
                        </div>

                        <div className={styles.location}>
                            <img className={styles.card_img} src={location} alt=""/>
                            <div className={styles.img_text}>
                                Краснодарский край,<br/>
                                г. Кранодар,<br/>
                                ул. Старокубанская,<br/>
                                143/2, офис 7, 350075
                            </div>
                        </div>

                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.front_card_logo}>
                        <div className={styles.card_logo}>
                            <img className={styles.logo} src={logo} alt=""/>
                            <h2 className={styles.logo_title}>ООО "Партнер"</h2>
                            <h1 className={styles.card_header_title}>Евгения Деревицкая</h1>
                            <h1 className={styles.subtitle}>специалист отдела продаж</h1>
                            <div className={styles.social_media}>
                                <div className="social_media-content">
                                    <a className={styles.link} href="https://wa.me/79885222477"><img className={styles.social_media_img}
                                            src={whatsapp} alt=""/></a>
                                    <a className={styles.link} href="https://t.me/ferganerj"><img className={styles.social_media_img}
                                            id="last_social_media_img" src={telegram} alt=""/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className={styles.back_card}>
            <div className={styles.card_wrapper}>

                <div className={styles.back_card_wrapper}>
                    <div className={styles.back_card_logo}>
                        <div className={styles.card_logo}>
                            <img className={styles.logo} src={logo} alt=""/>
                            <h2 className={styles.logo_title}>PARTNER LLC</h2>
                            <h1 className={styles.card_header_title}>Evgenia Derevitskaya</h1>
                            <h1 className={styles.subtitle}>customer support manager</h1>
                            <div className={styles.social_media}>
                                <div className="social_media-content">
                                    <a className={styles.link} href="https://wa.me/79885222477"><img className={styles.social_media_img}
                                            src={whatsapp} alt=""/></a>
                                    <a className={styles.link} href="https://t.me/ferganerj"><img className={styles.social_media_img}
                                            id="last_social_media_img" src={telegram} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.back_card_info}>
                        <div className={styles.back_card_info_container}>
                            <div className={styles.card_container}>
                                <img className={styles.card_img} src={phone} alt=""/>
                                <div className={styles.img_text}>
                                    <a href="tel:+79885222477">+7 (988) 522-24-77</a><br/>
                                    <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                                </div>
                            </div>

                            <div className={styles.card_container}>
                                <img className={styles.card_img} src={email} alt=""/>
                                <div className={styles.img_text}>
                                    <a href="mailto:partner.k2309@mail.ru">partner.k2309@mail.ru</a>
                                </div>
                            </div>

                            <div className={styles.location}>
                                <img className={styles.card_img} src={location} alt=""/>
                                <div className={styles.img_text}>
                                    Krasnodarskiy Krai,<br/>
                                    Krasnodar, 143/2,<br/>
                                    Starokubanskaya<br/>
                                    str., office 7, 350075
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DerevitskayaCardPage