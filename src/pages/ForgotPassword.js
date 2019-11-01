import React, { useState, useEffect } from 'react'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

import { firebase } from '../firebase'

const ForgotPassword = () => {
	const [email, setEmail] = useState('')
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => (email.length > 0 ? setDisabled(false) : setDisabled(true)), [
		email
	])

	const handleChange = (e) => {
		const { value } = e.target
		setEmail(value)
	}

	const handleSubmit = async () => {
		try {
			setLoading(true)
			setError('')
			setSuccess(false)
			await firebase.auth().sendPasswordResetEmail(email)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<Message warning>
				<Icon name='warning circle' />
				You will only receive an email if your email is on our records.
			</Message>
			<Form
				error={Boolean(error)}
				onSubmit={handleSubmit}
				loading={loading}
				success={success}
			>
				<Message
					success
					icon='check'
					header='Success!'
					content='An email has been sent.'
				/>
				<Message error header='Oops!' content={error} />
				<Form.Input
					fluid
					icon='envelope'
					iconPosition='left'
					label='Email'
					placeholder='Email'
					name='email'
					onChange={handleChange}
					value={email}
					type='email'
				/>
				<Button
					icon='sign in'
					type='submit'
					color='orange'
					content='Reset Password'
					disabled={disabled || loading}
				/>
			</Form>
		</>
	)
}

export default ForgotPassword
