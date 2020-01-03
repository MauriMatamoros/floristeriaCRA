import React from 'react'
import { Container, Popup, Button } from 'semantic-ui-react'
import ModalProductform from '../components/layout/ModalProdutForm'
import './styles/formProduct.css'
import { Link } from 'react-router-dom'

const FormProductPay = () => {
  return (
    <>
      <Container className='mbt-10em'>
        <div className='row'>
          <div className='col-lg-2 justify-content-center grid-images'>
            <ModalProductform src='/assets/Products/array-1.jpg' />
            <ModalProductform src='/assets/Products/array-2.jpg' />
            <ModalProductform src='/assets/Products/array-3.jpg' />
          </div>
          <div className='col-lg-5'>
            {/* Aqui es el corazon */}

            <div style={{ position: 'relative' }}>
              <div style={styles.iconHeart}>
                <button
                  className='btn p-0 m-0'
                  type='button'
                  onClick={() => alert('Se agregado la wishlist')}
                >
                  <i className='fas fa-heart fa-3x text-white' />
                </button>
              </div>
              <img
                src='/assets/Products/array-2.jpg'
                style={styles.imageArrayBig}
                alt='array-2'
              />
            </div>
          </div>
          <div className='col-lg-5 col-12 pl-5'>
            <div className='text-left'>
              <h3>Nombre del arreglo</h3>
              <p>L.250.00 / $.4.00</p>
            </div>
            <div className='text-left row p-3 container-quantity'>
              <p className='pr-4 h5'>Cantidad:</p>
              <div className='row p-0 m-0'>
                <button className='btn btn-outline-link btn-custom m-0'>
                  <p className='h4 font-weight-bold'>+</p>
                </button>
                <input
                  type='numeric'
                  className='form-control input-count mt-0'
                  value='0'
                />
                <button className='btn btn-outline-link btn-custom m-0'>
                  <p className='h4 font-weight-bold'>-</p>
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
  btnAddCart: {
    pading: 30,
    fontSize: 16
  },
  imageArray: {
    width: '100%',
    height: 'auto'
  },
  imageArrayBig: {
    width: '100%',
    maxHeight: 600
  },
  iconHeart: {
    position: 'absolute',
    top: '85%',
    left: '85%'
  }
}

export default FormProductPay
