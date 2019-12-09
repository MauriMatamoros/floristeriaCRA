import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import ItemCart from './ItemCart'

const SideBarCart = props => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation='overlay'
        direction='right'
        icon='labeled'
        inverted
        vertical
        visible={props.opened}
        style={styles.containerSideBar}
      >
        <div className='mt-2 pr-3 d-flex justify-content-end'>
          <a
            role='button'
            className='text-dark'
            onClick={() => props.setOpened(false)}
          >
            <i className='fas fa-times fa-1x' />
          </a>
        </div>

        {/* En caso de no existir producto en el carro de compras */}
        <div className='text-center p-3'>
          <img src='./assets/cart.png' style={{ width: 70, height: 50 }} />
          <p style={{ color: 'gray' }}>
            No tiene productos en el carro de compras, favor iniciar sesión y
            agregar arreglos a su carrito.
          </p>
        </div>

        <ItemCart />
        <ItemCart />
        <ItemCart />
      </Sidebar>
    </>
  )
}

const styles = {
  containerSideBar: {
    backgroundColor: 'white',
    width: '40%'
  }
}

export default SideBarCart
