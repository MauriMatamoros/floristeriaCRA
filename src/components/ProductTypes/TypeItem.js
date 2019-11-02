import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Button } from 'semantic-ui-react'
import axios from 'axios'

import { removeType } from '../../redux/actions/productTypes'
import { firebase, storage } from '../../firebase'

const TypeItem = ({ id, name, image, removeType }) => {
	const [disabled, setDisabled] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleDelete = async (id) => {
		try {
			setLoading(true)
			setDisabled(true)
			const token = await firebase.auth().currentUser.getIdToken()
			const { data } = await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/removeType',
				{ token, id }
			)
			await storage.ref(`types/${id}-${image}`).delete()
			removeType(data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Table.Row>
			<Table.Cell collapsing>
				<Icon name='options' /> {name}
			</Table.Cell>
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
	{ removeType }
)(TypeItem)
