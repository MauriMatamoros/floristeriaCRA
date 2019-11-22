import React from 'react'
import { Tab, Container, Grid } from 'semantic-ui-react'

import Search from '../components/layout/Search'
import GalleryItem from '../components/Gallery/GalleryItem'

const panes = [
  {
    menuItem: 'Imagenes',
    render: () => (
      <Tab.Pane loading={false}>
        <Grid>
          <Grid.Row className='pl-4'>
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  },
  { menuItem: 'Videos', render: () => <Tab.Pane>Videos</Tab.Pane> }
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
