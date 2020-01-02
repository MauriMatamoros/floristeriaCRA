import React from 'react'
import './styles/styles.css'
import { Link } from 'react-router-dom'

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
              <h3>{props.array.name}</h3>
              <p>L.250.00 / $.4.00</p>

              <Link
                type='button'
                className='btn btn-dark'
                to='/form_card_product'
              >
                <p className='font-weight-bold'>Ver producto</p>
              </Link>
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
