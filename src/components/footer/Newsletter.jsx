import React from 'react'
import '../../css/footer.css'

const Newsletter = () => {
  return (
    <div className='footer-news'>
        <h3 className="title-news">¡Suscríbete a nuestro Newsletter!</h3>
        <div className="block-subscribe">
            <img src="https://tiendamia.com/skin/frontend/traigo/traigo/images/news-icon.png" alt="news-icon" />
            <input className='input-text' type="email" name="email" placeholder='¡Ingresa tu email!'/>
            <button type="button" title="Enviar" className="button">
                <span>Recibir Ofertas</span>
            </button>
        </div>
    </div>
  )
}

export default Newsletter