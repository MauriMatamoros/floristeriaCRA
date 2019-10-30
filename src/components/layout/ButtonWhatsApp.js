import React from 'react'
import { Icon } from 'semantic-ui-react'

const ButtonWhatsApp = () => {
  return (
    <div
      style={{
        color: 'green'
      }}
    >
      <a
        href="https://wa.me/50495132753?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target="blank"
        style={{ textDecoration: 'none', color: 'green' }}
      >
        <Icon name="whatsapp" size={'huge'} />
      </a>
      <p className="text-green">Whatsapp</p>
    </div>
  )
}

export default ButtonWhatsApp
