import React from 'react'
import { Container } from 'semantic-ui-react'
import './styles/styles.css'

import FormInfoContact from './FormInfoContact'
import CartProduct from './CartProduct'
import Facture from './Facture'

const MethodPay = () => {
  return (
    <>
      <Container fluid className='mbt-10em'>
        <div className='row'>
          <div className='col-12 col-md-6 p-4 align-center'>
            <div>
              <img
                src='./assets/logo.png'
                style={styles.imageLogo}
                alt='logo-floristeria-honduras'
              />
            </div>
            {/* Div pasos a seguir */}
            <div className='row pl-4'>
              <p className='pr-4 font-weight-bold text-muted'>
                Información<small className='pl-4 h5'>></small>
              </p>
              <p className='text-muted'>
                Envio<small className='pl-4 h5'>></small>
              </p>
              <p className='pl-4 text-muted'>Pago</p>
            </div>
            {/* Div title */}
            <FormInfoContact />
          </div>

          <div
            className='view col-12 col-md-6 p-0'
            style={styles.containerRight}
          >
            <div style={styles.divShadowBlack} className='container-fluid'>
              <div style={styles.containerCardsProducts}>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
              </div>
              <Facture />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

const styles = {
  imageLogo: {
    width: 250,
    height: 'auto'
  },
  /* Derecha */
  containerRight: {
    position: 'realtive',
    backgroundImage: 'url("./assets/flowers_login.jpg")',
    backgroundSize: 'cover',
    height: '100vh'
  },
  divShadowBlack: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.75,
    width: '100%',
    height: '100%',
    padding: '5rem'
  },
  containerCardsProducts: {
    overflowX: 'hidden',
    overflowY: 'scroll',
    height: 270
  }
}

export default MethodPay
