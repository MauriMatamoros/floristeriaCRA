import React from 'react'
import { Segment } from 'semantic-ui-react'

const AccountHeader = props => {
  const { name, lastName, birthday, gender } = props.profile
  const { email } = props.auth
  return (
    <>
      <Segment
        secondary
        inverted
        className='p-0'
        style={styles.containerHeader}
      >
        <div className='d-flex justify-content-center pt-4'>
          <img
            src='./assets/logo-spiral-white.png'
            style={styles.imgLogo}
            alt='floristeria honduras'
          />
        </div>
        <div
          className='container text-center mt-3 mb-4 text-dark'
          style={styles.containerInfo}
        >
          <div className='row mt-3'>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-right'>Nombre:</p>
            </div>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-left'>
                {name} {lastName}
              </p>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-right'>Correo:</p>
            </div>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-left'>{email}</p>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-right'>
                Fecha de nacimiento:
              </p>
            </div>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-left'>{birthday}</p>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-right'>Género:</p>
            </div>
            <div className='col-lg-6 col-sm -12'>
              <p className='h5 font-weight-normal text-lg-left'>
                {gender === 'male' ? 'Hombre' : 'Mujer'}
              </p>
            </div>
          </div>
        </div>
      </Segment>
    </>
  )
}

const styles = {
  imgLogo: {
    width: '20%',
    height: '20%'
  },
  containerHeader: { backgroundColor: '#E09D55' }
}

export default AccountHeader
