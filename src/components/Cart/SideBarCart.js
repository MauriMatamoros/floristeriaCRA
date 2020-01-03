import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'

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
        <div className='d-flex flex-row justify-content-between pl-4 pr-4'>
          <p style={styles.titleHeader} className='mt-4'>
            CARRITO
          </p>
          <button
            type='button'
            className='btn btn-link text-dark'
            onClick={() => props.setOpened(false)}
          >
            <p style={styles.titleHeader}>X</p>
          </button>
        </div>

        <div className='pl-4 pb-2 pt-2' style={styles.containerPromo}>
          <p className='text-left text-muted'>
            Gaste L.100 más y obtenga envío gratis!
          </p>
        </div>

        <ItemCart />
        <ItemCart />

        <div
          className='pt-5 mt-5 text-left pl-4 pr-4'
          style={styles.containerTop}
        >
          <textarea
            style={styles.inputAddTitle}
            placeholder='Añadir nota al pedido'
          />
          <p style={styles.sentTitle}>
            Gastos de envio e impuestos calculados en la caja
          </p>
          <div className='mt-5 w-100 text-center'>
            <Link
              className='btn btn-dark'
              to='/method-pay'
              onClick={() => props.setOpened(false)}
            >
              Comprar anora
            </Link>
          </div>
        </div>
      </Sidebar>
    </>
  )
}

const styles = {
  containerSideBar: {
    backgroundColor: 'white',
    width: '30%'
  },
  titleHeader: { fontSize: 20 },
  containerPromo: {
    borderBottom: '1px solid lightgray',
    borderTop: '1px solid lightgray'
  },
  containerTop: {
    borderTop: '1px solid lightgray'
  },
  addTitle: {
    color: 'gray'
  },
  sentTitle: {
    color: 'gray',
    fontSize: 13
  },
  inputAddTitle: {
    border: 0,
    textDecoration: 'none',
    width: '100%'
  }
}

export default SideBarCart
