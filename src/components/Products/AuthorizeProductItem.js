import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { firebaseConnect } from 'react-redux-firebase'
import axios from 'axios'

class AuthorizeProductItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image: ''
        }
        this.authorizeProduct = this.authorizeProduct.bind(this)
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
    async authorizeProduct () {
      const token = await this.props.firebase.auth().currentUser.getIdToken();
      const {
        data
      } = await axios.post(
        "http://localhost:5001/floristeria-cra/us-central1/authorizeProducts",
        {token, authorized: true, productId: this.props.id}
      );
      console.log(data)
    }
	render() {
		let { name, price, id } = this.props
		return (
			<>
				<Grid.Column className='col-12 col-lg-3 col-md-4 col-sm-6 p-4'>
					<span
                        className='text-decoration-none text-dark'
                        onClick={this.authorizeProduct}
					>
						<div className='mt-1 mb-1'>
							<Image src={this.state.image} style={styles.image} />
							<p className='text-center mt-4'>
								{name}
								<br />
								<span>{price}</span>
							</p>
						</div>
					</span>
				</Grid.Column>
			</>
		)
	}
}

const styles = {
	image: {
		width: '100%',
		height: '100%'
	}
}

export default firebaseConnect()(AuthorizeProductItem)
