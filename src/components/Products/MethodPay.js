import React from 'react'
import { Container } from 'semantic-ui-react'
import './styles/styles.css'

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
            <div className='text-left align-center'>
              <p className='font-weight-bold h5'>Información del contacto</p>
            </div>
            {/* div perfil */}
            <div className='row pl-4 pt-3 text-left'>
              <div className='col-12 col-md-1 p-0 align-center-d-flex'>
                <div style={styles.containerPerfil} className='pl-1'>
                  <img
                    src='./assets/icons/icon-user-white.png'
                    alt='user-icon'
                    style={styles.imagenIconUser}
                  />
                </div>
              </div>
              <div className='col-12 col-md-11 align-self-center align-center'>
                <p className='p-0 m-0 pl-4 h5'>
                  Nombre apellido <small>(correo electronico)</small>
                </p>
                <button type='button' className='btn btn-link p-0 m-0 pl-4'>
                  <p style={styles.textCloseSession}>Cerrar sesion</p>
                </button>
              </div>
            </div>
            {/* div checkbox */}
            <div className='row pl-2'>
              <div className='col-12'>
                <label className='row pl-2 pt-4 justify-content-center-label'>
                  <input type='checkbox' className='input-custom-check' />
                  <p className='h6 font-weight-bold pl-2 pt-1'>
                    Quiero recibir noticias y ofertas exclusivas.
                  </p>
                </label>
              </div>
            </div>
            <div className='row pt-4 pb-3'>
              <div className='col'>
                <p className='font-weight-bold h5 text-left align-center'>
                  Dirección de envio
                </p>
              </div>
            </div>
            {/* Inputs */}
            <form>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <input
                    type='text'
                    placeholder='Nombres'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
                <div className='col-12 col-md-6'>
                  <input
                    type='text'
                    placeholder='Apellidos'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <input
                    type='text'
                    placeholder='Dirección de envio'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <input
                    type='text'
                    placeholder='Ciudad'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-md-6'>
                  <select className='w-100 font-weight-bold input-custom-text'>
                    <option value='0'>Francico Morazan</option>
                    <option value='1'>La ceiba</option>
                    <option value='2'>SPS</option>
                  </select>
                </div>
                <div className='col-12 col-md-6'>
                  <input
                    type='text'
                    placeholder='Código postal'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <input
                    type='text'
                    placeholder='Teléfono'
                    className='w-100 font-weight-bold input-custom-text'
                  />
                </div>
              </div>
              <div className='row float-btn'>
                <div className='col-12'>
                  <button className='btn btn-dark'>
                    <p className='font-weight-bold'>Continuar</p>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='col-12 col-md-6' style={{ backgroundColor: 'green' }}>
            Derecha
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
  containerPerfil: {
    backgroundColor: 'black',
    borderRadius: 100,
    width: 65,
    height: 65
  },
  imagenIconUser: {
    width: 'auto',
    height: 60
  },
  textCloseSession: {
    color: '#E09D55',
    fontWeight: 'bold'
  }
}

export default MethodPay
