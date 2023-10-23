import React from 'react'

const ItemDestacado = ({title, img, oldPrice, price, dscto}) => {
  return (
    <li className='item'>
        <a class="product-image centradosku" title={title} href="/">
            <img width="160" height="160" loading="lazy" alt={title} src={img} />
        </a>
        <div className="block_holder">
            <div className="descuento_en_el_envio">
                <span class="muli-bold">
                    <span class="envio-gratis-pe">ENVÍO GRATIS</span>
                </span>
            </div>
            <h2 class="product-name">{title}</h2>
            <div class="price-desde">
                <span class="precioDesde">Desde</span>
                <span class="list-price currency_price">{oldPrice}</span>
            </div>
            <div className="price-box">
                <div className="regular-price">
                    <span className="price">{price}</span>
                    <span class="newPorcentageDesk">
                        <span class="discount_blackfriday">{dscto}</span>
                    </span>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ItemDestacado