import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalBlog from '../Blogs/ModalBlog'

const ItemBlogSmall = props => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className='col-lg-4 col-md-6 col-12 text-center pb-5'>
        <Link onClick={() => setVisible(!visible)}>
          <div className='pb-4'>
            <img
              src='./assets/News/img-3.jpg'
              style={styles.sizeImage}
              alt='new'
            />
          </div>
          <div>
            <p style={styles.fontDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </Link>
        <ModalBlog openModal={visible} event={setVisible} />
      </div>
    </>
  )
}

const styles = {
  sizeImage: {
    width: '90%',
    height: 'auto',
    borderRadius: 15
  },
  fontDescription: {
    fontSize: 15,
    paddingLeft: '2rem',
    paddingRight: '2rem',
    color: 'gray',
    fontWeight: 'bold'
  }
}
export default ItemBlogSmall
