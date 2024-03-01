import './AshurovCardPage.scss'
import phone from 'assets/cardsImages/phone.svg'
import email from 'assets/cardsImages/email.svg'
import location from 'assets/cardsImages/location.svg'
import logo from 'assets/cardsImages/logo.png'
import whatsapp from 'assets/cardsImages/whatsapp.svg'
import telegram from 'assets/cardsImages/telegram.svg'

const AshurovCardPage = () => {
  return (
    <div className="director_card">
    <div className="card">
      <div className="front_card">
        <div className="card_wrapper">
          <main className="front_card_wrapper">
            <div className="front_card_info">

              <div className="card_container">
                <img className="card_img" src={phone} alt=""/>
                <div className="img_text">
                  <a href="tel:+79693031111">+7 (969) 303-11-11</a><br/>
                  <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                </div>
              </div>

              <div className="card_container">
                <img className="card_img" src={email} alt=""/>
                <div className="img_text">
                  <a href="mailto:partner.m2309@mail.ru">partner.m2309@mail.ru</a>
                </div>
              </div>

              <div className="card_container">
                <img className="card_img" src={location} alt=""/>
                <div className="img_text">
                  Краснодарский край,<br/>
                  г. Кранодар,<br/>
                  ул. Старокубанская,<br/>
                  143/2, офис 7, 350075
                </div>
              </div>

            </div>

            <div className="line"></div>

            <div className="front_card_logo">
              <div className="card_logo">
                <img className="logo" src={logo} alt=""/>
                <h2 className="logo_title">ООО "Партнер"</h2>
                <h1 className="card_header_title">Ашуров Виталий</h1>
                <h1 className="subtitle">директор</h1>
                <div className="social_media">
                  <div className="social_media-content">
                    <a className="link" href="https://wa.me/79693031111"><img className="social_media_img"
                        src={whatsapp} alt=""/></a>
                    <a className="link" href="https://t.me/Ziv1329"><img className="social_media_img" id="last_social_media_img"
                        src={telegram} alt=""/></a>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>

      <div className="back_card">
        <div className="card_wrapper">

          <div className="back_card_wrapper">
            <div className="back_card_logo">
              <div className="card_logo">
                <img className="logo" src={logo} alt=""/>
                <h2 className="logo_title">PARTNER LLC</h2>
                <h1 className="card_header_title">ASHUROV VITALY</h1>
                <h1 className="subtitle">director</h1>
                <div className="social_media">
                  <div className="social_media-content">
                    <a className="link" href="https://wa.me/79693031111"><img className="social_media_img"
                        src={whatsapp} alt=""/></a>
                    <a className="link" href="https://t.me/Ziv1329"><img className="social_media_img" id="last_social_media_img"
                        src={telegram} alt=""/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="back_card_info">
              <div className="back_card_info_container">
                <div className="card_container">
                  <img className="card_img" src={phone} alt=""/>
                  <div className="img_text">
                    <a href="tel:+79693031111">+7 (969) 303-11-11</a><br/>
                    <a href="tel:+78612033833">+7 (861) 203-38-33</a>
                  </div>
                </div>

                <div className="card_container">
                  <img className="card_img" src={email} alt=""/>
                  <div className="img_text">
                    <a href="mailto:vit.aks@mail.ru">vit.aks@mail.ru</a>
                  </div>
                </div>

                <div className="card_container">
                  <img className="card_img" src={location} alt=""/>
                  <div className="img_text">
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

export default AshurovCardPage