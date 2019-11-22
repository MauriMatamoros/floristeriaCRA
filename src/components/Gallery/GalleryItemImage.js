import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ModalMultimediaImage from '../layout/ModalMultimediaImage'

const GalleryItemImage = props => {
  return (
    <>
      <Grid.Column className='col-12 col-lg-2 col-md-3 col-sm-4 p-2'>
        <ModalMultimediaImage
          render={
            <Image
              src='http://3.bp.blogspot.com/-EHQ7m2jUFIk/VGY6WLi1o8I/AAAAAAAAQc4/MWwFtJQcyYA/s1600/La%2BGazania%2B01.JPG'
              style={styles.image}
            />
          }
        />
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

export default GalleryItemImage
