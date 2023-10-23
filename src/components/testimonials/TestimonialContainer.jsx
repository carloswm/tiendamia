import React from 'react'
import CardTestimonial from './CardTestimonial'
import '../../css/testimonial.css'

const TestimonialContainer = () => {

    const review = [
        { user: "Chris Palacios", comment: "He comprado en 2 ocasiones y en ambas el producto ha llegado bien.", avatar: "img/testimonials/avatar1.png"},
        { user: "maritzam08", comment: "hasta el momento todo bien, llega puntual y todo conforme.", avatar: "img/testimonials/avatar2.png"},
        { user: "Jean Carlos Rodriguez", comment: "Excelente servicio y muy buenos precios, todo correcto.", avatar: "img/testimonials/avatar3.png"},
    ]

  return (
    <div className='footer-testimonios'>
        <h3 class="title">Testimonios de nuestros clientes</h3>
        <div className="embedsocial-reviews">
            <div class="sub-title-box"> <b>4.4</b> estrellas  de 2201 reseñas </div>
            <div className="container-fluid">
                {
                    review.map((item, index) => (
                        <CardTestimonial
                            key={index}
                            user={item.user}
                            avatar={item.avatar}
                            comment={item.comment}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TestimonialContainer