import React from 'react'
import { Link } from 'react-router-dom'

const ItemBlogSmall = props => {
  return (
    <>
      <div className='container'>
        <div className='row' style={styles.container}>
          <div className='col-lg-3 col-12 text-center'>
            <div>
              <p className='font-weight-bold'>Nuevo arreglo de San Valentin</p>
            </div>
            <div className='pb-4'>
              <img
                src='./assets/News/img-3.jpg'
                style={styles.sizeImage}
                alt='new'
              />
            </div>
          </div>
          <div className='p-4 col-lg-9 col-12'>
            <Link className='text-decoration-none text-dark' to='/blog/new'>
              <h4>
                Disfruta de nuestro nuevo arreglo de San Valentin y totalmente
                mejorado.
              </h4>
            </Link>
            <p className='text-blue pb-3'>
              Blanca | <span>02/12/2019 - 09:24 pm</span>
            </p>
            <p style={styles.fontDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  )
}

const styles = {
  container: {},
  sizeImage: {
    width: 150,
    height: 230
  },
  fontDescription: {
    fontSize: 15,
    color: 'gray'
  }
}
export default ItemBlogSmall
