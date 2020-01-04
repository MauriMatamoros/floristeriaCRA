import React from 'react'
import { Container, Popup, Button } from 'semantic-ui-react'
import './styles/formProduct.css'
import { Link } from 'react-router-dom'

const FormProductPay = () => {
  return (
    <>
      <Container className='mbt-10em'>
        <div className='row'>
          <div className='col-lg-2 justify-content-center grid-images'>
            <a role='button' onClick={() => alert('Modal')}>
              <img
                src='/assets/Products/array-1.jpg'
                style={styles.imageArray}
                className='mb-3 images-to-row'
              />
            </a>
            <a role='button' onClick={() => alert('Modal')}>
              <img
                src='/assets/Products/array-2.jpg'
                style={styles.imageArray}
                className='mb-3 images-to-row'
              />
            </a>
            <a role='button' onClick={() => alert('Modal')}>
              <img
                src='/assets/Products/array-3.jpg'
                style={styles.imageArray}
                className='mb-3 images-to-row'
              />
            </a>
          </div>
          <div className='col-lg-5'>
            <img src='/assets/Products/array-2.jpg' style={styles.imageArray} />
          </div>
          <div className='col-lg-5 col-12 text-center p-5'>
            <div>
              <img src='/assets/logo-spiral.png' style={styles.logo} />
            </div>
            <div className='text-left'>
              <h3>Titulo del arreglo</h3>
              <p>L.250.00 / $.4.00</p>
            </div>
            <div className='text-left row p-3 container-quantity'>
              <p className='pr-4 h5'>Cantidad:</p>
              <div className='row'>
                <button className='btn btn-dark btn-custom'>
                  <p className='h4'>+</p>
                </button>
                <input
                  type='numeric'
                  className='form-control input-count mt-2'
                />
                <button className='btn btn-dark btn-custom'>
                  <p className='h4'>-</p>
                </button>
              </div>
            </div>
            <div className='text-left row p-3'>
              <p className='mr-3 h5'>
                Texto personalizado:{' '}
                <Popup
                  content='Solo puede agregar 4 palabras'
                  trigger={
                    <Button circular icon='info' size='mini' color='grey' />
                  }
                />
              </p>
              <input type='text' className='form-control' />
            </div>
            <div className='pt-2 pb-2'>
              <button className='btn btn-white w-100' style={styles.btnAddCart}>
                Agregar a mi wishlist
              </button>
            </div>
            <div className='pt-2 pb-2'>
              <button className='btn btn-grey w-100' style={styles.btnAddCart}>
                Agregar al carrito de compras
              </button>
            </div>
            <div>
              <button className='btn btn-dark w-100' style={styles.btnAddCart}>
                <Link to='/method-pay' className='w-100'>
                  <p className='text-white'>Comprar ahora</p>
                </Link>
              </button>
            </div>
            <div className='pt-5'>
              <p className='text-justify'>
                Aqui esta la description del producto. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

const styles = {
  logo: {
    width: 72,
    height: 58
  },
  btnAddCart: {
    pading: 30,
    fontSize: 16
  },
  imageArray: {
    width: '100%',
    height: 'auto'
  }
}

export default FormProductPay
