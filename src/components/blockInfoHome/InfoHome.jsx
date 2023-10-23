import React from 'react'
import '../../css/info-home.css'
import cajaInfo from '../../img/ups/caja-info-home.svg'
import avion from '../../img/ups/avion-info-home.svg'
import visa from '../../img/ups/visa.svg'
import mastercard from '../../img/ups/mastercard.svg'
import amex from '../../img/ups/mastercard.svg'
import pefectivo from '../../img/ups/pagoefectivo.svg'
import headphone from '../../img/ups/headphones-info-home.svg'

const InfoHome = () => {
  return (
    <div className='banners-info-home'>
        <div className="inner-div">
            <img className="caja" src={cajaInfo} alt="" />
            <p>
                Qué es Tiendamia. Fácil, rápido y seguro. <a href='/'>Cómo comprar</a>
            </p>
        </div>
        <div class="inner-div border-left">
            <img className="avion" src={avion} alt="" />
            <p>
                Información de Aduanas. Hacemos todo por ti. <a href='/'>Saber más</a>
            </p>
        </div>
        <div class="inner-div border-left">
            <div class="cards-container">
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={amex} alt="amex" />
                <img src={pefectivo} alt="pefectivo" />
            </div>
            <p>Paga con crédito o débito.</p>
        </div>
        <div class="inner-div border-left">
            <img className="caja" src={headphone} alt="" />
            <p>Ayuda y seguimiento en tu idioma. <a href='/' class="solo_ar solo_uy solo_pe" >Centro de ayuda en línea</a>
            </p>
        </div>
    </div>
  )
}

export default InfoHome