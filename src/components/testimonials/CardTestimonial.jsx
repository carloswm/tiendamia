import React from 'react'
import '../../css/testimonial.css'

const CardTestimonial = ({user, avatar, comment}) => {
  return (
    <div className="swiper-slide">
        <div className="slider-item">
            <div className="slider-img">
                <div className="img">
                    <img src={avatar} alt="" />
                </div>
                <p className="reviewer-name">{user}</p>
                <p className="review-text-slider">{comment}</p>
                <div className="stars">
                    <svg height="16" width="16" role="img" aria-label="star">
                        <path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#ffdc00"></path>
                    </svg>
                    <svg height="16" width="16" role="img" aria-label="star">
                        <path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#ffdc00"></path>
                    </svg>
                    <svg height="16" width="16" role="img" aria-label="star">
                        <path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#ffdc00"></path>
                    </svg>
                    <svg height="16" width="16" role="img" aria-label="star">
                        <path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#ffdc00"></path>
                    </svg>
                    <div className="quote">
                        <div className="slide-quote"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardTestimonial