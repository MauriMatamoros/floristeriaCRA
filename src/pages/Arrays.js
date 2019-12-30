import React from 'react'
import { Container, Grid, Pagination } from 'semantic-ui-react'

import ArrayItem from '../components/Arrays/ArrayItem'
import ArraysCategory from '../components/Index/ArraysCategory'

const Gallery = props => {
  return (
    <>
      <Container fluid className='mbt-10em text-center'>
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
        <ArraysCategory />
      </Container>
    </>
  )
}

export default Gallery
