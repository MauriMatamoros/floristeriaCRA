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
    <footer className='page-footer font-small mdb-color lighten-5 pt-4'>
      {/* <!-- Footer Links --> */}
      <div className='container text-center text-md-left text-dark'>
        {/* <!-- Grid row --> */}
        <div className='row'>
          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1'>
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
          </div>
          {/* <!-- Grid column --> */}

          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'>
            {/* <!-- Contact details --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>Tienda</h5>

            <Select
              placeholder='Seleccione la ciudad...'
              options={countryOptions}
              onChange={handleCityChange}
            />

            <ul className='list-unstyled pt-3'>
              <li>
                <p>
                  <i className='fas fa-envelope mr-3'></i> info@example.com
                </p>
              </li>
              <li>
                <p>
                  <i className='fas fa-phone mr-3'></i> + 01 234 567 88
                </p>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <div className='col-md-6 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'>
            {/* <!-- Contact details --> */}
            <h5 className='font-weight-bold text-uppercase mb-4'>Dirección</h5>

            <ul className='list-unstyled'>
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

          <hr className='clearfix w-100 d-md-none' />

          {/* <!-- Grid column --> */}
          <div
            className='col-md-6 col-lg-4 mx-auto my-4'
            style={{ backgroundColor: '#A7ABB5', padding: '2em' }}
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
            <button type='button' className='btn btn-fb'>
              <i className='fab fa-facebook-f left'></i> Facebook
            </button>
            <button type='button' className='btn btn-ins'>
              <i className='fab fa-instagram left'></i> Instagram
            </button>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}

      {/* <!-- Copyright --> */}
      <div className='footer-copyright text-center py-3 text-dark'>
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

export default withRouter(connect(mapStateToProps, { setCity })(FooterMain))
