import React from 'react'

const HeaderContact = () => {
  return (
    <>
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
    </>
  )
}

const styles = {
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

export default HeaderContact
