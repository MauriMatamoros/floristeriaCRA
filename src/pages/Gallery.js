import React from 'react'
import { Tab, Container, Grid, Pagination } from 'semantic-ui-react'

import Search from '../components/layout/Search'
import GalleryItemImage from '../components/Gallery/GalleryItemImage'
import GalleryItemVideo from '../components/Gallery/GalleryItemVideo'

const panes = [
  {
    menuItem: 'Imagenes',
    render: () => (
      <div className='text-center'>
        <Tab.Pane loading={false}>
          <Grid centered>
            <Grid.Row centered>
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
              <GalleryItemImage />
            </Grid.Row>
          </Grid>
        </Tab.Pane>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
    )
  },
  {
    menuItem: 'Videos',
    render: () => (
      <div className='text-center'>
        <Tab.Pane>
          <Grid centered>
            <Grid.Row centered>
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
              <GalleryItemVideo />
            </Grid.Row>
          </Grid>
        </Tab.Pane>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
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
