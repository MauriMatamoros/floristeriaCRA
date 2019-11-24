import React from 'react'
import { Tab, Container, Grid, Pagination } from 'semantic-ui-react'

import Search from '../components/layout/Search'
import ArrayItem from '../components/Arrays/ArrayItem'

const Gallery = props => {
  return (
    <>
      <Container fluid className='mbt-10em text-center'>
        <Search />
        <div className='w-100 mt-5 mb-2'>
          <h2 className='text-center'>Nombre de la categoria</h2>
        </div>
        <Grid centered className='pb-5'>
          <Grid.Row centered>
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
            <ArrayItem />
          </Grid.Row>
        </Grid>

        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </Container>
    </>
  )
}

export default Gallery
