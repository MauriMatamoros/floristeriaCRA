import React from 'react'

const ItemCart = props => {
  return (
    <>
      <div className='d-flex flex-row mt-2 mb-2' style={styles.containerItem}>
        <div className='w-25'>
          <img
            src={
              'https://paisajismodigital.com/blog/wp-content/uploads/2019/10/flores-nacionales-de-europa-segunda-parte-4.jpg'
            }
            style={{ width: 100, height: 100 }}
          />
        </div>
        <div className='w-75 d-flex justify-content-start align-items-center pl-2'>
          <div className='text-left'>
            <p className='h5 m-0'>Nombre del arreglo</p>
            <p style={styles.colorCategory}>Categoria del arreglo</p>
            <h6>L.250.00/$4.00</h6>
          </div>
        </div>
        <div className='pr-3 d-flex flex-column justify-content-between'>
          <a role='button'>
            <i className='far fa-trash-alt'></i>
          </a>
          <div className='d-flex flex-row'>
            <p className='font-weight-bold h5'>3</p>
            <img
              src={'./assets/icons/icon_flower.png'}
              style={styles.flowerIcon}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  colorCategory: {
    color: 'gray'
  },
  flowerIcon: {
    width: 22,
    height: 30
  },
  containerItem: {
    borderBottom: '2px solid lightgray'
  }
}

export default ItemCart
