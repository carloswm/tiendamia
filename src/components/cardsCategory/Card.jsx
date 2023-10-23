import React from 'react'
import '../../css/cards-apple.css'

const Card = ({title, img}) => {
  return (
    <>
      <a
        href="https://tiendamia.com/pe/liquidacion-total"
        title={title}
      >
        <div class="card-apple">
            <h3 class="title-card-apple">{title}</h3>
          <div class="img-card-apple">
            <img
              loading="lazy"
              src={img}
              alt={title}
            />
          </div>
          <div
            class="btn-card-apple"
            href="https://tiendamia.com/pe/liquidacion-total"
            title={title}
          >
            Ver productos
          </div>
        </div>
      </a>
    </>
  );
}

export default Card