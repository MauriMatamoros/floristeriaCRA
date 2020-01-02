import React from 'react'
import { Icon } from 'semantic-ui-react'

const ButtonWhatsApp = () => {
  return (
    <div
      style={styles.containerBtnWhatsApp}
      className='d-flex flex-row justify-content-center align-items-center pl-1'
    >
      <a
        href="https://wa.me/50495132753?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target='blank'
        style={{ textDecoration: 'none', color: 'green' }}
      >
        <Icon name='whatsapp' size={'huge'} />
      </a>
    </div>
  )
}

const styles = {
  containerBtnWhatsApp: {
    position: 'relative',
    color: 'green',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 68,
    height: 68
  }
}

export default ButtonWhatsApp
