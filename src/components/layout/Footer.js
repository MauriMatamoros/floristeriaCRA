import React, { useState, useEffect } from 'react'
import { Select, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setCity } from '../../redux/actions/city'

const countryOptions = [
  { key: 'Tegucigalpa', value: 'Tegucigalpa', text: 'Tegucigalpa' },
  { key: 'SPS', value: 'SPS', text: 'SPS' },
  { key: 'La Ceiba', value: 'La Ceiba', text: 'La Ceiba' }
]

const FooterMain = ({ setCity }) => {
  const [email, setEmail] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => (email.length > 0 ? setDisabled(false) : setDisabled(true)), [
    email
  ])

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleCityChange = (e, { value }) => {
    setCity(value)
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError('')

      setSuccess(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setEmail('')
      setLoading(false)
    }
  }
  return (
    /* <!-- Footer --> */
    <footer
      className='page-footer font-small lighten-5 pt-4'
      style={styles.containerFooter}
    >
      {/* <!-- Footer Links --> */}
      <div className='container text-center text-md-left text-dark'>
        {/* <!-- Grid row --> */}
        <div className='row'>
          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'>
            {/* <!-- Links --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>
              Informativo
            </h5>

            <ul className='list-unstyled'>
              <li>
                <p>
                  <a href='#!' className='text-dark'>
                    Compras
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href='#!' className='text-dark'>
                    Pedidos
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href='#!' className='text-dark'>
                    Envios
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href='#!' className='text-dark'>
                    Sobre nosotros
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href='#!' className='text-dark'>
                    Preguntas frecuentes
                  </a>
                </p>
              </li>
            </ul>
            <div className='row center-cards'>
              <img src='/assets/icons/visa-icon.png' style={styles.iconCard} />
              <img
                src='/assets/icons/paypal-icon.png'
                style={styles.iconCard}
              />
              <img
                src='/assets/icons/mastercard-icon.png'
                style={styles.iconCard}
              />
              <img
                src='/assets/icons/discover-icon.png'
                style={styles.iconCard}
              />
              <img
                src='/assets/icons/amazon-icon.png'
                style={styles.iconCard}
              />
            </div>
          </div>
          {/* <!-- Grid column --> */}

          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'>
            {/* <!-- Contact details --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>
              Visita la tienda
            </h5>

            <Select
              placeholder='Seleccione la ciudad...'
              options={countryOptions}
              onChange={handleCityChange}
            />
            <ul className='list-unstyled pt-3'>
              <li>
                <p>
                  <i className='fas fa-home mr-3'></i>
                  Dirección de la empresa....
                </p>
                <p>
                  <i className='fas fa-clock mr-3'></i>
                  Horarios de atencion
                </p>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'>
            {/* <!-- Contact details --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>
              Información
            </h5>

            <ul className='list-unstyled pt-3'>
              <li>
                <p className='pb-3'>
                  <i className='fas fa-envelope mr-3'></i> info@example.com
                </p>
              </li>
              <li>
                <p className='m-0'>whatsapp SPS: 3333-55555</p>
                <p className='m-0'>whatsapp TGA: 3333-55555</p>
                <p className='m-0'>whatsapp CBA: 3333-55555</p>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}

          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div
            className='col-md-6 col-lg-3 mx-auto my-4'
            style={styles.containerSubscription}
          >
            {/* <!-- Social buttons --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>
              Suscripción
            </h5>
            <p>
              Suscribete para informarte sobre nuestras promociones y eventos.
            </p>
            <div>
              <Form
                loading={loading}
                error={Boolean(error)}
                onSubmit={handleSubmit}
                success={success}
              >
                <Form.Input
                  name='email'
                  onChange={handleChange}
                  value={email}
                  type='text'
                  placeholder='Correo'
                  label='Ingrese su correo'
                />
                <Button type='submit' disabled={disabled}>
                  Suscribirse
                </Button>
              </Form>
            </div>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}

      {/* <!-- Copyright --> */}
      <div
        className='footer-copyright text-center py-3 text-dark'
        style={styles.containerCopyRight}
      >
        © 2019 Copyright:
        <a href='/' className='text-dark'>
          {' '}
          Floristeria Honduras
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}

const mapStateToProps = ({ city }) => ({
  city
})

const styles = {
  containerFooter: {
    backgroundColor: '#F7F7F7'
  },
  containerCopyRight: {
    backgroundColor: '#FFF'
  },
  containerSubscription: { padding: '1em' },
  iconCard: {
    width: 40,
    height: 35
  }
}

export default withRouter(connect(mapStateToProps, { setCity })(FooterMain))
