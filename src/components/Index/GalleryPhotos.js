import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import GalleryItemImage from '../Gallery/GalleryItemImage'
import { Grid } from 'semantic-ui-react'

class GalleryPhotos extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className='text-center mt-5 mb-5'>
          <h2>Lo más destacado</h2>
        </div>
        <div className='mb-5 pb-5'>
          <Grid centered>
            {this.props.featuredProducts && Object.keys(this.props.featuredProducts).map(key => (
              <GalleryItemImage key={key} id={key} {...this.props.featuredProducts[key]}/>
            ))}
          </Grid>
        </div>
      </>
    )
  }
}

export default compose(
  firestoreConnect(props => [
    {collection: 'featuredProducts'}
  ]),
  connect(({firestore: {data}}) => ({
    featuredProducts: data.featuredProducts
  }))
)(GalleryPhotos)
