import React from 'react'
import WishListItem from '../Account/WishListItem'

const WishList = () => {
  return (
    <div className='p-5 pt-0' style={styles.container}>
      <div className='d-flex justify-content-center'>
        <img src='./assets/logo-spiral.png' style={styles.logo} />
      </div>
      <div className='d-flex justify-content-center'>
        <div>
          <p className='h4 pt-3 text-center'>WISH LIST</p>
          <p>
            No puedes guardar items, busca flores para agregar a tu wish list.
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <a
          className='btn btn-dark rounded font-weight-400'
          role='button'
          onClick={() =>
            alert('Este boton lleva al catalogo de productos en general.')
          }
        >
          Agrega items a tu wish list
        </a>
      </div>
      <div className='pt-5'>
        <WishListItem />
        <WishListItem />
        <WishListItem />
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#D3D3D3'
  },
  logo: {
    width: 150,
    height: 100
  }
}

export default WishList
