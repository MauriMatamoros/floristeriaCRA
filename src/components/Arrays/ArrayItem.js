import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArrayItem = props => {
  return (
    <>
      <Grid.Column className='col-12 col-lg-3 col-md-4 col-sm-6 p-4'>
        <Link
          to='/form_card_product'
          className='text-decoration-none text-dark'
        >
          <div className='mt-1 mb-1'>
            <Image
              src='https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334_960_720.jpg'
              style={styles.image}
            />
            <p className='text-center mt-4'>
              Nombre del arreglo
              <br />
              <span>$5.00 / L.125.50</span>
            </p>
          </div>
        </Link>
      </Grid.Column>
    </>
  )
}

const styles = {
  image: {
    width: '100%',
    height: '100%'
  }
}

export default ArrayItem
