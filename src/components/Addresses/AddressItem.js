import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Button } from 'semantic-ui-react'
import axios from 'axios'

import { removeAddress } from '../../redux/actions/addresses'
import { firebase } from '../../firebase'

const AddressItem = ({ id, name, description, removeAddress }) => {
	const [disabled, setDisabled] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleDelete = async (id) => {
		try {
			setLoading(true)
			setDisabled(true)
			const token = await firebase.auth().currentUser.getIdToken()
			const { data } = await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/removeAddress',
				{ token, id }
			)
			removeAddress(data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Table.Row>
			<Table.Cell collapsing>
				<Icon name='address card' /> {name}
			</Table.Cell>
			<Table.Cell collapsing>{description}</Table.Cell>
			<Table.Cell>
				<Button
					negative
					onClick={(e) => handleDelete(id)}
					disabled={disabled}
					loading={loading}
				>
					<Icon name='delete' />
					Delete
				</Button>
			</Table.Cell>
		</Table.Row>
	)
}

export default connect(
	null,
	{ removeAddress }
)(AddressItem)
