import React from 'react'
import '../../css/descubrir.css'

const ItemDescubrir = ({title, img, price}) => {
  return (
    <li className='itemLanding'>
        <div className="prod-fijo-right">
            <a class="product-image" title={title} href="/">
                <img class="imagen-landing" width="160" height="160" loading="lazy" alt="Alesis DRP100 - Audio-Isolation Electronic Drums Headphones for Monitoring, Practice or Stage Use with 1/4" src={img} />
            </a>
        </div>
        <div className="prod-fijo-left">
            <h2 class="product-name">
                <a class="textMulish" title={title} href="/">{title}</a>
            </h2>
            <div className="price-box-fijos">
                <a href="/" className="regular-price">
                    <span className="price">{price}</span>
                </a>
            </div>
        </div>
    </li>
  )
}

export default ItemDescubrir