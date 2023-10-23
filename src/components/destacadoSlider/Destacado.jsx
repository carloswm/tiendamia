import React from 'react'
import ItemDestacado from './ItemDestacado'
import '../../css/destacado.css'

const Destacado = () => {

    const items = [
        { text: "Columbia Tipton Peak II Insulated Jacket 201009 Black L", url: "https://static-catalog.tiendamia.com/marketplace_images/production/product_13561_mirakl_image_1.jpg", oldPrice: "S/ 1.696", price: "S/  769", dscto: "44% OFF"},
        { text: "Women's Puffer Coat", url: "https://static-catalog.tiendamia.com/marketplace_images/production/product_4779_mirakl_image_1_2a570764.jpg", oldPrice: "S/ 370", price: "S/  271", dscto: "32% OFF"},
        { text: "Champion Garment-Dyed T-Shirt", url: "https://static-catalog.tiendamia.com/marketplace_images/production/product_11087_mirakl_image_1.jpg", oldPrice: "S/ 173", price: "S/  136", dscto: "25% OFF"},
        { text: "Columbia Women's Pike Lake II Insulated Vest", url: "https://static-catalog.tiendamia.com/marketplace_images/production/product_23698_mirakl_image_1.jpg", oldPrice: "S/ 2.053", price: "S/  809", dscto: "50% OFF"},
        { text: "Columbia Winter Blur Pom Pom Beanie 186210 Nocturnal One...", url: "https://static-catalog.tiendamia.com/marketplace_images/production/product_14377_mirakl_image_1.jpg", oldPrice: "S/ 418", price: "S/  226", dscto: "50% OFF"},
    ]

  return (
    <div className='slider-destacado'>
        <div className="page-title">
            <a href="/"><h3>¡Lo más destacado!   <span>Ver más</span></h3></a>
        </div>
        <div className="container-slider">
            <div className="category-products">
                <ul className="products-grid">
                    {
                        items.map((item, index) => (
                            <ItemDestacado
                                title={item.text}
                                img={item.url}
                                oldPrice={item.oldPrice}
                                price={item.price}
                                dscto={item.dscto}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Destacado