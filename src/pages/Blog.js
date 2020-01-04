import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemBlogBig from '../components/Blogs/ItemBlogBig'
import ItemBlogSmall from '../components/Blogs/ItemBlogSmall'

const Blog = props => {
  return (
    <>
      <Container className='mbt-10em'>
        <ItemBlogBig />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12'>
              <ItemBlogSmall />
              <ItemBlogSmall />
              <ItemBlogSmall />
            </div>
            <div className='col-lg-4 col-12'>Video</div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
