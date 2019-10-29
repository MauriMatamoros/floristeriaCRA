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

import database, { storage } from '../firebase'

const CreateType = () => {
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
			const payload = {
				name: type.name,
				image: type.media.name
			}
			const { key } = await database.ref('types').push(payload)
			await handleImageUpload(key)
			setType(INITIAL_TYPE)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
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
		</>
	)
}

export default CreateType
