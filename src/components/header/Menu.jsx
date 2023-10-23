import React from 'react'
import menuIcon from '../../img/header/menu.svg'
import arrowDown from '../../img/header/arrow-down.svg'

const Menu = () => {

    const items = [
        { text: 'Liquidación Total', url:'/' },
        { text: 'Costos y tarifas', url:'/' },
        { text: 'Mis pedidos', url:'/' },
        { text: 'Invita y Gana', url:'/' },
        { text: 'Garantía de entrega', url:'/' },
    ]

  return (
    <div className='menu-container'>
        <div className="left">
            <img className='menu-icon' src={menuIcon} alt="menu" />
            <p>Todas las categorías</p>
            <img className='arrow-down' src={arrowDown} alt="" />
        </div>
        <div className="mid">
            <ul>
                { items.map((item, index) => (
                    <a key={index} href={item.url}>{item.text}</a>
                ))}
            </ul>
        </div>
        <div className="right">
            <p>#TiendamiaEnVivo</p>
        </div>
    </div>
  )
}

export default Menu