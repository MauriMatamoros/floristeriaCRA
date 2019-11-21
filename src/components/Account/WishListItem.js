import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const HistoryItem = props => {
  return (
    <>
      <div className='container pt-2 pb-2'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row text-center justify-content-left align-items-center'>
              <img
                src='https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg'
                style={styles.imageSize}
                alt='floristeria honduras'
              />
              <div className='d-flex flex-column'>
                <h5 className='card-title ml-3'>Titulo del producto</h5>
                <p className='ml-3'>L.255.00/$.10.00</p>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <a
              role='button'
              className='btn btn-outline-dark'
              href={() => alert('Compartir por correo')}
            >
              Compartir
            </a>
          </div>
          <div className='col-md-4'>
            <div className='card-body text-right'>
              <label
                style={styles.textVisible}
                className='d-flex flex-row justify-content-end'
              >
                <Checkbox toggle />
                <span>Visible</span>
              </label>

              <a
                role='button'
                href={() => alert('Remueve el item de la lista de wish list')}
                className='card-text'
              >
                Quitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  imageSize: { width: 110, height: 85 },
  textVisible: {
    fontSize: 16
  }
}

export default HistoryItem
