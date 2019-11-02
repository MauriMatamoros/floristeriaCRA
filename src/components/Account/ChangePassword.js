import React, { useState, useEffect } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import firebase from 'firebase'

const ChangePassword = () => {
	const INITIAL_PAYLOAD = {
		newPassword: '',
		checkPassword: ''
	}
	const [payload, setPayload] = useState(INITIAL_PAYLOAD)
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)
	useEffect(() => {
		if (
			payload.newPassword === payload.checkPassword &&
			payload.newPassword.length > 0
		) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}, [payload])
	const handleChange = (e) => {
		const { name, value } = e.target
		setPayload((prevState) => ({
			...prevState,
			[name]: value
		}))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setSuccess(false)
			setError('')
			setLoading(true)
			await firebase.auth().currentUser.updatePassword(payload.newPassword)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	return (
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
				content='Your password has been updated.'
			/>
			<Message error header='Oops!' content={error} />
			<Form.Field>
				<Form.Input
					fluid
					icon='lock'
					iconPosition='left'
					label='New Password'
					placeholder='New Password'
					name='newPassword'
					onChange={handleChange}
					value={payload.newPassword}
					type='password'
				/>
				<Form.Input
					fluid
					icon='lock'
					iconPosition='left'
					label='Check Password'
					placeholder='Check Password'
					name='checkPassword'
					onChange={handleChange}
					value={payload.checkPassword}
					type='password'
				/>
			</Form.Field>
			<Button
				icon='edit outline'
				type='submit'
				color='orange'
				content='Change Password'
				disabled={disabled || loading}
			/>
		</Form>
	)
}

export default ChangePassword
