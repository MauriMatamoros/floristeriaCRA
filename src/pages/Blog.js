import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemBlogSmall from '../components/Blogs/ItemBlogSmall'

const Blog = props => {
  return (
    <>
      <Container className='mbt-10em'>
        <div className='row'>
          <ItemBlogSmall />
          <ItemBlogSmall />
          <ItemBlogSmall />
          <ItemBlogSmall />
          <ItemBlogSmall />
          <ItemBlogSmall />
          <ItemBlogSmall />
        </div>
      </Container>
    </>
  )
}

export default Blog
