import React, { useState, useEffect } from 'react'
import {
	Form,
	Input,
	Button,
	Image,
	Message,
	Header,
	Icon
} from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'

import { storage, firebase } from '../firebase'
import { addType } from '../redux/actions/productTypes'
import Spinner from '../components/Spinner/Spinner'
import TypeList from '../components/ProductTypes/TypeList'

const CreateType = ({ addType, userLoading }) => {
	const INITIAL_TYPE = {
		name: '',
		media: ''
	}
	const [type, setType] = useState(INITIAL_TYPE)
	const [mediaPreview, setMediaPreview] = useState('')
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const isType = Object.values(type).every((element) => Boolean(element))
		isType ? setDisabled(false) : setDisabled(true)
	}, [type])

	const handleChange = (e) => {
		const { name, value, files } = e.target
		if (name === 'media') {
			setType((prevState) => ({ ...prevState, media: files[0] }))
			setMediaPreview(window.URL.createObjectURL(files[0]))
		} else {
			setType((prevState) => ({
				...prevState,
				[name]: value
			}))
		}
	}

	const handleImageUpload = async (typeId) => {
		await storage.ref(`types/${typeId}-${type.media.name}`).put(type.media)
	}

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setLoading(true)
			setError('')
			const { name, media } = type
			const token = await firebase.auth().currentUser.getIdToken()
			const { data } = await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/postType',
				{ token, name, image: media.name }
			)
			await handleImageUpload(data.id)
			addType(data)
			setType(INITIAL_TYPE)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return userLoading ? (
		<Spinner />
	) : (
		<>
			<Header as='h2' block>
				<Icon name='add' color='orange' />
				Create New Type
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
					content='Your type has been posted.'
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
						value={type.name}
					/>
					<Form.Field
						control={Input}
						name='media'
						label='Media'
						content='Select Image'
						type='file'
						accept='image/*'
						onChange={handleChange}
					/>
				</Form.Group>
				<Image src={mediaPreview} rounded centered size='small' />
				<Form.Field
					control={Button}
					color='blue'
					icon='pencil alternate'
					content='Submit'
					type='submit'
					disabled={disabled || loading}
				/>
			</Form>
			<TypeList />
		</>
	)
}

const mapStateToProps = ({ auth }) => ({
	userLoading: auth.loading
})

export default connect(
	mapStateToProps,
	{ addType }
)(CreateType)
