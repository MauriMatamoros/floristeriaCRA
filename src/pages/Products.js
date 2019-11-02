import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
	const { type, page } = useParams()
	return (
		<div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1>
				{type} - {page}
			</h1>
		</div>
	)
}

export default Products
