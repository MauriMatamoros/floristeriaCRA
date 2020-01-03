import React from 'react'
import './styles/styles.css'

const ItemCart = props => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-2 mb-2'>
          <div className='col-lg-3 col-12 p-3'>
            <div className='text-center'>
              <img
                src={
                  'https://paisajismodigital.com/blog/wp-content/uploads/2019/10/flores-nacionales-de-europa-segunda-parte-4.jpg'
                }
                style={styles.imagen}
                alt='imagen'
              />
            </div>
          </div>
          <div className='col-lg-9 col-12 pt-4 cart-item'>
            <div className='cart-item-align'>
              <h6>Culumpio de amor</h6>
              <p>$.3.00</p>
            </div>
            <div className='cart-item-input justify-content-between mt-3'>
              <div className='row p-0 m-0 cart-item-input-row'>
                <button className='btn btn-outline-link btn-custom m-0'>
                  <p className='h4 font-weight-bold'>+</p>
                </button>
                <input
                  type='numeric'
                  className='form-control input-count mt-0'
                  //value='0'
                />
                <button className='btn btn-outline-link btn-custom m-0'>
                  <p className='h4 font-weight-bold'>-</p>
                </button>
              </div>
              <button type='button' className='btn btn-link'>
                <p className='text-muted'>REMOVER</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  imagen: { width: 100, height: 100, borderRadius: 10 }
}

export default ItemCart
