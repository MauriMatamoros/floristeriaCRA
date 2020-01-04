import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'

class ProductItem extends Component {
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
	render() {
		let { name, price, id } = this.props
		return (
			<>
				<Grid.Column className='col-12 col-lg-3 col-md-4 col-sm-6 p-4'>
					<Link
						to={`/product/${id}`}
						className='text-decoration-none text-dark'
					>
						<div className='mt-1 mb-1'>
							<Image src={this.state.image} style={styles.image} />
							<p className='text-center mt-4'>
								{name}
								<br />
								<span>{price}</span>
							</p>
						</div>
					</Link>
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

export default firebaseConnect()(ProductItem)
