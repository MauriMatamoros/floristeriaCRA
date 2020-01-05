import React, {Component} from 'react'
import './styles/styles.css'
import { Link } from 'react-router-dom'
import {firebaseConnect} from 'react-redux-firebase'

class CarouselNewsItem extends Component {
  constructor(props) {
		super(props)
		this.state = {
			image: ''
		}
	}
  async componentDidMount() {
		const { firebase, id, images } = this.props
		let productImage = await firebase
			.storage()
			.ref(`products/${id}-${images[0]}`)
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
        <div className='container-fluid' style={styles.container}>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 text-right center'>
              <img src={this.state.image} style={styles.image} alt='array' />
            </div>
            <div className='col-12 col-lg-6'>
              <div className='text-center pt-4'>
                <h3>{this.props.name}</h3>
                <p>L.250.00 / $.4.00</p>
  
                <Link
                  type='button'
                  className='btn btn-dark'
                  to='/form_card_product'
                >
                  <p className='font-weight-bold'>Ver producto</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const styles = {
  image: {
    width: 400,
    height: 350
  },
  container: {
    marginBottom: '10rem'
  }
}

export default firebaseConnect()(CarouselNewsItem)
