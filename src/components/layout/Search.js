import React from 'react'

const Search = () => {
  return (
    <div className='input-group mb-3' style={styles.width}>
      <div className='input-group-prepend'>
        <span className='input-group-text'>
          <i className='fas fa-search'></i>
        </span>
      </div>
      <input
        type='text'
        className='form-control form-red'
        placeholder='Buscar...'
      />
    </div>
  )
}

const styles = {
  width: {
    width: '60%'
  }
}

export default Search
