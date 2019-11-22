import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ModalMultimediaVideo from '../layout/ModalMutlimediaVideo'

const GalleryItemVideo = props => {
  return (
    <>
      <Grid.Column className='col-12 col-lg-2 col-md-3 col-sm-4 p-2'>
        <ModalMultimediaVideo
          render={
            <Image
              src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/10/22/15717587777250.jpg'
              style={styles.image}
            />
          }
          video={props.linkVideo}
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

export default GalleryItemVideo
