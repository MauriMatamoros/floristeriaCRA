import React from 'react'
import { Tab, Container, Grid, Pagination } from 'semantic-ui-react'

import Search from '../components/layout/Search'
import ArrayItem from '../components/Arrays/ArrayItem'

const Gallery = props => {
  return (
    <>
      <Container fluid className='mbt-10em text-center'>
        <Search />
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
