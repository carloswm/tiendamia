import React from 'react'
import ItemDescubrir from './ItemDescubrir'
import '../../css/descubrir.css'

const Descubrir = () => {

    const itemDiscover = [
        { text: "Kiuluta Dog Bark Collar for Large Medium Small Dogs Automatic...", url: "https://m.media-amazon.com/images/I/816WXPNR1wL.._AC_SR160,160_.jpg", price: "S/ 140"},
        { text: "Club de Nuit Intense by Armaf cologne for men EDT 3.6 oz New in Box", url: "https://i.ebayimg.com/images/g/pIUAAOSwjkxgCfTr/s-l160.jpg", price: "S/ 216"},
        { text: "Hasbro Uglydolls Ox to-Go Stuffed Plush Toy, 5'' Tall", url: "https://m.media-amazon.com/images/I/81DJ+98gKYL.._AC_SR160,160_.jpg", price: "S/ 45"},
        { text: "Tibetan Singing Bowl Set ~ Easy to Play with Dual-End Striker &...", url: "https://m.media-amazon.com/images/I/91QzRD9tzrL.._AC_SR160,160_.jpg", price: "S/ 150"},
        { text: "Women Hair Accessories 18PCS Handmade Simulation Pearl Barrettes...", url: "https://m.media-amazon.com/images/I/71OSCb093HS.._AC_SR160,160_.jpg", price: "S/ 65"},
    ]

  return (
    <div className='dicover-container'>
        <div className='otro-container-slider'>
            <div class="backgroundSlider">
                <img loading="lazy" src="/newsletter/materiales/2021/tiendamia-en-vivo/Burbujas_desktop.svg" alt=''/>
            </div>
            <div class="title-Slider-desktop">
                <p>Descubre lo que la gente está comprando</p>
            </div>
            <div class="div2-desktop">
                <div class="subtitle-Slider-desktop subtitle-Slider-desktop-">Inspírate y sé parte de #TiendamiaEnVivo <p>🔥</p></div>
                <button class="button-Slider-desktop">Quiero ver todo </button>
            </div>
            <div className='container-slider slider-skus'>
                <div className="category-products">
                    <ul className='products-grid'>
                        {
                            itemDiscover.map((item, index) => (
                                <ItemDescubrir
                                    key={index}
                                    title={item.text}
                                    img={item.url}
                                    price={item.price}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Descubrir