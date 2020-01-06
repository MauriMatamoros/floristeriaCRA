import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import {compose} from 'redux'
import {withFirebase} from 'react-redux-firebase'
import {connect} from 'react-redux'
import ModalMultimediaImage from '../layout/ModalMultimediaImage'

class GalleryItemImage extends Component {
  constructor(props) {
		super(props)
		this.state = {
			image: ''
		}
	}
  async componentDidMount() {
    const { firebase, id, image } = this.props
		let productImage = await firebase
			.storage()
			.ref(`featuredProducts/${id}-${image}`)
			.getDownloadURL()

		if (productImage) {
			this.setState({
				image: productImage
			})
		}
	}
  render () {
    return (
      <>
        <Grid.Column className='col-12 col-lg-3 col-md-4 col-sm-6 p-2'>
          <ModalMultimediaImage
            render={
              <Image
                src={this.state.image}
                style={styles.image}
              />
            }
          />
        </Grid.Column>
      </>
    )
  }
}

const styles = {
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12
  }
}

export default compose(
  withFirebase,
  connect(() => ({}))
)(GalleryItemImage)
