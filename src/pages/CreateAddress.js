import React, { useState, useEffect } from 'react'
import {
	Form,
	Input,
	Button,
	Message,
	Header,
	Icon,
	TextArea
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import axios from 'axios'

//TODO change form information
import Spinner from '../components/Spinner/Spinner'
import AddressList from '../components/Addresses/AddressList'
import { addAddress } from '../redux/actions/addresses'
import { firebase } from '../firebase'

const CreateAddress = ({ user, userLoaded, addAddress }) => {
	const INITIAL_ADDRESS = {
		name: '',
		description: ''
	}
	const [address, setAddress] = useState(INITIAL_ADDRESS)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const isType = Object.values(address).every((element) => Boolean(element))
		isType ? setDisabled(false) : setDisabled(true)
	}, [address])

	const handleChange = (e) => {
		const { name, value } = e.target
		setAddress((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setLoading(true)
			setError('')
			const { name, description } = address
			const token = await firebase.auth().currentUser.getIdToken()
			const { data } = await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/postAddress',
				{ token, name, description }
			)
			addAddress(data)
			setAddress(INITIAL_ADDRESS)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return userLoaded ? (
		<Spinner />
	) : (
		<>
			<Header as='h2' block>
				<Icon name='add' color='orange' />
				Create New Address
			</Header>
			<Form
				loading={loading}
				error={Boolean(error)}
				onSubmit={handleSubmit}
				success={success}
			>
				<Message
					success
					icon='check'
					header='Success!'
					content='Your Address has been posted.'
				/>
				<Message error header='Oops!' content={error} />
				<Form.Group widths='equal'>
					<Form.Field
						control={Input}
						name='name'
						label='Name'
						placeholder='Name'
						type='text'
						onChange={handleChange}
						value={address.name}
					/>
					<Form.Field
						control={TextArea}
						name='description'
						label='Description'
						placeholder='Description'
						type='text'
						onChange={handleChange}
						value={address.description}
					/>
				</Form.Group>
				<Form.Field
					control={Button}
					color='blue'
					icon='pencil alternate'
					content='Submit'
					type='submit'
					disabled={disabled || loading}
				/>
			</Form>
			<AddressList />
		</>
	)
}

const mapStateToProps = ({ auth }) => ({
	user: auth.user,
	userLoaded: auth.loading
})

export default connect(
	mapStateToProps,
	{ addAddress }
)(CreateAddress)
