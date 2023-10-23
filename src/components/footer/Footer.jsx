import React from 'react'
import Newsletter from './Newsletter'
import '../../css/footer.css'
import LinksFooter from './LinksFooter'

const Footer = () => {
  return (
    <div className='footer'>
        <Newsletter />
        <LinksFooter />
        <small>© 2014 - 2023 - Tiendamia - Todos los derechos reservados - Todas las marcas son propiedad de sus respectivos dueños</small>
    </div>
  )
}

export default Footer