import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'

import Spinner from '../Spinner/Spinner'
import { getFeaturedProduct } from '../../redux/actions/featuredProducts'
import FeaturedProductItem from './FeaturedProductItem'

const FeaturedProductList = ({ featuredProducts, loadingFeaturedProducts, getFeaturedProduct }) => {
	useEffect(() => {
		getFeaturedProduct()
	}, [getFeaturedProduct])
	return loadingFeaturedProducts ? (
		<Spinner />
	) : (
		<>
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>Feature products</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{featuredProducts.length > 0 ? (
						featuredProducts.map((featureProduct) => <FeaturedProductItem key={featureProduct.id} {...featureProduct} />)
					) : (
						<Table.Row>
							<Table.Cell collapsing>
								<Icon name='add' /> Add Featured Product
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</>
	)
}

const mapStateToProps = ({ featuredProducts }) => ({
	featuredProducts: featuredProducts.products,
	loadingFeaturedProducts: featuredProducts.loading
})

export default connect(
	mapStateToProps,
	{ getFeaturedProduct }
)(FeaturedProductList)
