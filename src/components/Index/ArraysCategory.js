import React from 'react'
import { Container } from 'semantic-ui-react'
import { MDBBtn } from 'mdbreact'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ItemsCarousel from 'react-items-carousel'
import axios from 'axios'

import CardCategory from './CardCategoty'
import Spinner from '../Spinner/Spinner'
import { storage } from '../../firebase'

class ArraysCategory extends React.Component {
	constructor() {
		super()
		this.state = {
			index: 0,
			responsive: 5,
			loading: true,
			arraysFlowers: []
		}
	}

	_prev = () => {
		this.setState({ index: this.state.index - 1 })
	}
	_next = () => {
		this.setState({ index: this.state.index + 1 })
	}

	async componentDidMount() {
		const { data } = await axios.post(
			'http://localhost:5001/floristeria-cra/us-central1/getTypes'
		)
		const flowerArray = []
		for (const type of data) {
			const image = await storage
				.ref(`types/${type.id}-${type.image}`)
				.getDownloadURL()
			flowerArray.push({ ...type, image })
		}
		this.setState(() => ({ loading: false, arraysFlowers: flowerArray }))
	}

	render() {
		const chevronWidth = 40
		return this.state.loading ? (
			<Spinner />
		) : (
			<>
				<Container fluid className='pt-5 pb-5'>
					<div className='text-center pb-5'>
						<h1 className='font-weight-bold'>Lo que buscas</h1>
					</div>
				</Container>
				<div style={{ padding: `0 ${chevronWidth}px` }}>
					<ItemsCarousel
						requestToChangeActive={() => console.log('Hola')}
						activeItemIndex={this.state.index}
						/* numberOfCards es la propiedad donde se agrupara los elementos en el responsive */
						numberOfCards={this.state.responsive}
						gutter={20}
						leftChevron={
							<MDBBtn
								onClick={() => this._prev()}
								size='lg'
								rounded
								color='black'
							>
								<ArrowBackIosIcon />
							</MDBBtn>
						}
						rightChevron={
							<MDBBtn
								onClick={() => this._next()}
								size='lg'
								color='black'
								rounded
							>
								<ArrowForwardIosIcon />
							</MDBBtn>
						}
						outsideChevron
						chevronWidth={chevronWidth}
					>
						{this.state.arraysFlowers.map((array) => (
							<CardCategory key={array.id} array={array} />
						))}
					</ItemsCarousel>
				</div>
			</>
		)
	}
}

export default ArraysCategory
