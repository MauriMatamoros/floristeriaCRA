import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Button } from 'semantic-ui-react'

import Spinner from '../Spinner/Spinner'
import AddressItem from './AddressItem'
import { getAddresses } from '../../redux/actions/addresses'

const AddressList = ({ addresses, loadingAddresses, getAddresses }) => {
	useEffect(() => {
		getAddresses()
	}, [getAddresses])
	return loadingAddresses ? (
		<Spinner />
	) : (
		<>
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>Addresses</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{addresses.length > 0 ? (
						addresses.map((address) => (
							<AddressItem key={address.id} {...address} />
						))
					) : (
						<Table.Row>
							<Table.Cell collapsing>
								<Icon name='add' /> Add Addresses
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</>
	)
}

const mapStateToProps = ({ addresses }) => ({
	addresses: addresses.addresses,
	loadingAddresses: addresses.loading
})

export default connect(
	mapStateToProps,
	{ getAddresses }
)(AddressList)
