import React from 'react'
import { Container } from 'semantic-ui-react'

import Carousel from '../components/Index/Carousel'
import GalleryPhotos from '../components/Index/GalleryPhotos'
import ArraysCategory from '../components/Index/ArraysCategory'

const Home = () => (
	<>
		<Carousel />
		<ArraysCategory />
		<Container className='pt-4 pb-4 w-75'>
			<GalleryPhotos />
		</Container>
	</>
)

export default Home
