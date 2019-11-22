import React from 'react'
import { Tab, Container, Grid } from 'semantic-ui-react'

import Search from '../components/layout/Search'
import GalleryItemImage from '../components/Gallery/GalleryItemImage'
import GalleryItemVideo from '../components/Gallery/GalleryItemVideo'

const panes = [
  {
    menuItem: 'Imagenes',
    render: () => (
      <Tab.Pane loading={false}>
        <Grid>
          <Grid.Row className='pl-4'>
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
            <GalleryItemImage />
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Videos',
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row className='pl-4'>
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
            <GalleryItemVideo linkVideo='https://www.youtube.com/embed/gHzPCXTv8pY?autoplay=1' />
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  }
]

const Gallery = props => {
  return (
    <>
      <Container fluid className='mbt-10em'>
        <Search />
        <Tab panes={panes} className='mt-5' />
      </Container>
    </>
  )
}

export default Gallery
