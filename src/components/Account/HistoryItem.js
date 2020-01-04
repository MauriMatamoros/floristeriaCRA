import React from 'react'

const HistoryItem = props => {
  return (
    <>
      <a
        role='button'
        onClick={() => props.toggle()}
        style={styles.textDecoration}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='card-body text-left'>
                <h5 className='card-title'>Nombre del producto</h5>
                <p className='card-text'>Descripcion del producto.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row text-center justify-content-center align-items-center'>
                <p className='mr-3'>L.255.00/$.10.00</p>
                <img
                  src='https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg'
                  style={styles.imageSize}
                  alt='floristeria honduras'
                />
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className='card-footer text-muted'>Mayo, Lunes 10 2019</div>
    </>
  )
}

const styles = {
  imageSize: { width: 110, height: 85 },
  textDecoration: { textDecoration: 'none' }
}

export default HistoryItem
