import React from 'react'
import './styles/styles.css'

const CarouselNewsItem = props => {
  return (
    <>
      <div className='container-fluid' style={styles.container}>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 text-right center'>
            <img src={props.array.image} style={styles.image} alt='array' />
          </div>
          <div className='col-12 col-lg-6'>
            <div className='text-center pt-4'>
              <h3>Culumpio de amor</h3>
              <p>L.250.00 / $.4.00</p>
              <button
                className='btn btn-dark'
                onClick={() => alert('Ir al detalle del producto')}
              >
                Ver producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  image: {
    width: 400,
    height: 350
  },
  container: {
    marginBottom: '10rem'
  }
}

export default CarouselNewsItem
