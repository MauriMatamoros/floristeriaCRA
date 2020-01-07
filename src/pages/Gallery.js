import React from 'react'
import { Tab, Container, Grid, Pagination } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import GalleryItemVideo from '../components/Gallery/GalleryItemVideo'
import GalleryImageItem from '../components/Gallery/GalleryImageItem'

const panes = [
  {
    menuItem: 'Imagenes',
    render: (props) => {
      return (
        <div className='text-center'>
          <Tab.Pane loading={false} style={styles.containerTab}>
            <Grid centered>
              <Grid.Row centered>
                {props.galleries && props.galleries.map((gallery) => (
                  <GalleryImageItem key={gallery.id} {...gallery}/>
                ))}
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
  },
  {
    menuItem: 'Videos',
    render: () => (
      <div className='text-center'>
        <Tab.Pane style={styles.containerTab}>
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
  useFirestoreConnect(() => {
		return [
			{ collection: 'galleries' }
		]
	})
  return (
    <>
      <Container fluid className='mbt-10em'>
        <Tab panes={panes} galleries={props.galleries} className='mt-5' />
      </Container>
    </>
  )
}

const styles = {
  containerTab: {
    borderWidth: 0
  }
}

export default connect(
  ({firestore}) => ({
    galleries: firestore.ordered.galleries
  })
)(Gallery)
