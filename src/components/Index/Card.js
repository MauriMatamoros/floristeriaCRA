import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ property }) => {
  const { index, img, title } = property
  return (
    <div id={`card-${index}`} className='card'>
      <img src={img} alt='...' />
      <div className='details'>
        <span className='index'>{index + 1}</span>
        <ul className='features'>
          <li className='icon-bed'>
            {title} <span>bedrooms</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card
