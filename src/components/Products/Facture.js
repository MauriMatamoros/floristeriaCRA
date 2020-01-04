import React from 'react'

const Facture = () => {
  return (
    <>
      <div className='container-fluid p-0 mt-5' style={styles.containerMain}>
        <div className='row p-0 pt-4 pb-4'>
          <div className='col-md-12 col-lg-9 p-0 pt-1'>
            <input
              type='text'
              style={styles.input}
              placeholder='Tarjeta de regalo o código de descuento'
            />
          </div>
          <div className='col-md-12 col-lg-3 p-0'>
            <button type='button' className='btn btn-light w-100'>
              <p className='font-weight-bold'>Usar</p>
            </button>
          </div>
        </div>
      </div>
      {/* Sub total */}
      <div className='container-fluid p-0 pt-4'>
        <div className='row'>
          <div className='col'>
            <p className='text-white font-weight-bold'>Sub total</p>
          </div>
          <div className='col'>
            <p className='text-white text-right font-weight-bold'>$ 14.00</p>
          </div>
        </div>
        <div className='row pt-2 pb-4' style={styles.containerBottom}>
          <div className='col'>
            <p className='text-white font-weight-bold'>Envio</p>
          </div>
          <div className='col'>
            <p className='text-white text-right font-weight-bold'>
              Calculado en el siguiente paso.
            </p>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col'>
            <p className='font-weight-bold text-white h4'>Total</p>
          </div>
          <div className='col'>
            <p className='font-weight-bold text-white text-right h4'>$ 14.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    height: 40
  },
  containerMain: {
    borderTop: '#FFF solid 1px',
    borderBottom: '#FFF solid 1px'
  },
  containerBottom: {
    borderBottom: '#FFF solid 1px'
  }
}

export default Facture
