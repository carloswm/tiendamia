import React from 'react'
import Card from './Card'

const CardsApple = () => {

    const infoCard = [
        {text: "¡Liquidación total!", url: "https://images.tiendamia.com/materiales/ecuador/2023/Septiembre/viewability/cat-home/ec_categoria-home_outlet_187x270.png"},
        {text: "Tecnología", url: "https://images.tiendamia.com/materiales/general/2023/peru/Septiembre/cat-home/pe_categorias_home_tecnologia_187x270.png"},
        {text: "Moda Exclusiva", url: "https://images.tiendamia.com/materiales/general/2023/peru/Septiembre/cat-home/pe_categorias_home_moda_187x270.png"},
    ]

  return (
    <div className='container-cards-apple'>
        <div className="banners-apple">
            {
                infoCard.map((card, index) => (
                    <Card
                        key={index}
                        title={card.text}
                        img={card.url}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default CardsApple