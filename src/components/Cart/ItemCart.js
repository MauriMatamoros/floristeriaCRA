import React from 'react'
import './styles/styles.css'

const ItemCart = props => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-2 mb-2 containerItem'>
          <div className='col-lg-2 col-12'>
            <div className='text-center'>
              <img
                src={
                  'https://paisajismodigital.com/blog/wp-content/uploads/2019/10/flores-nacionales-de-europa-segunda-parte-4.jpg'
                }
                style={{ width: 100, height: 100 }}
                alt='imagen'
              />
            </div>
          </div>
          <div className='col-lg-7 col-12'>
            <div className='text-center'>
              <p className='h5 m-0'>Nombre del arreglo</p>
              <p className='colorCategory'>Categoria del arreglo</p>
              <h6>L.250.00/$4.00</h6>
            </div>
          </div>
          <div className='col-lg-3 col-12'>
            <div className='cart-option d-flex justify-content-around flex-row'>
              <button className='btn' type='button'>
                <i className='far fa-trash-alt'></i>
              </button>
              <div className='row justify-content-center align-items-center'>
                <img
                  src={'./assets/icons/icon_flower.png'}
                  className='flowerIcon'
                  alt='icon_flower'
                />
                <p className='font-weight-bold h5'>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCart
