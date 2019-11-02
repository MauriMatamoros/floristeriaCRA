import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'

import Spinner from '../Spinner/Spinner'
import TypeItem from './TypeItem'
import { getTypes } from '../../redux/actions/productTypes'

const TypeList = ({ types, loadingTypes, getTypes }) => {
	useEffect(() => {
		getTypes()
	}, [getTypes])
	return loadingTypes ? (
		<Spinner />
	) : (
		<>
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>Types</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{types.length > 0 ? (
						types.map((type) => <TypeItem key={type.id} {...type} />)
					) : (
						<Table.Row>
							<Table.Cell collapsing>
								<Icon name='add' /> Add Types
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</>
	)
}

const mapStateToProps = ({ productTypes }) => ({
	types: productTypes.types,
	loadingTypes: productTypes.loading
})

export default connect(
	mapStateToProps,
	{ getTypes }
)(TypeList)
