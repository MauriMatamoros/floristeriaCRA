import React from 'react'
import './styles/styles.css'
import HeaderContact from './HeaderContact'

const FormInfoContact = () => {
  return (
    <>
      <div className='text-left align-center'>
        <p className='font-weight-bold h5'>Información del contacto</p>
      </div>
      <HeaderContact />
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
    </>
  )
}

export default FormInfoContact
