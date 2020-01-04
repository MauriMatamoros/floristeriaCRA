import React from 'react'
import './styles/styles.css'

const CartProduct = () => {
  return (
    <>
      <div className='row mt-3 mb-3'>
        <div className='col-12'>
          <div className='row'>
            <div style={styles.containerImagen}>
              <div style={styles.count}>
                <p className='font-weight-bold text-dark text-center'>1</p>
              </div>
              <img
                src='./assets/Products/array-1.jpg'
                alt='array1'
                style={styles.imagen}
              />
            </div>
            <div className='col pl-4 align-self-center'>
              <p className='font-weight-bold text-white h5'>
                Nombre del producto
              </p>
            </div>
            <div className='col align-self-center'>
              <p className='font-weight-bold text-white h4'>$ 14.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  imagen: {
    width: 120,
    height: 'auto',
    borderRadius: 10
  },
  containerImagen: {
    position: 'relative'
  },
  count: {
    position: 'absolute',
    left: '94%',
    borderRadius: 50,
    backgroundColor: '#FFF',
    zIndex: 2,
    width: 20
  }
}

export default CartProduct
