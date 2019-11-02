import React, { useState, useEffect } from 'react'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'

import { firebase } from '../../firebase'
import { updateProfile } from '../../redux/actions/auth'

const AccountDetails = ({
	name,
	lastName,
	birthday,
	gender,
	updateProfile
}) => {
	const INITIAL_USER = {
		name,
		lastName,
		birthday,
		gender
	}
	const [user, setUser] = useState(INITIAL_USER)
	const [disabled, setDisabled] = useState(true)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const isUser = Object.values(user).every((element) => Boolean(element))
		isUser && user.password === user.confirmPassword
			? setDisabled(false)
			: setDisabled(true)
	}, [user])

	const handleChange = (e) => {
		const { name, value } = e.target
		setUser((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			setError('')
			const { name, lastName, birthday, gender } = user
			const token = await firebase.auth().currentUser.getIdToken()
			const { data } = await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/updateProfile',
				{ token, name, lastName, birthday, gender }
			)
			updateProfile(data)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
			setDisabled(false)
		}
	}
	return (
		<Container text className='pt-6em'>
			<Form
				error={Boolean(error)}
				onSubmit={handleSubmit}
				loading={loading}
				success={success}
			>
				<Message error header='Oops!' content={error || ''} />
				<Message
					success
					icon='check'
					header='Success!'
					content='Your profile has been updated.'
				/>
				<Segment>
					<Form.Input
						fluid
						icon='user'
						iconPosition='left'
						label='Name'
						placeholder='Name'
						name='name'
						onChange={handleChange}
						value={user.name}
						type='text'
					/>
					<Form.Input
						fluid
						icon='user'
						iconPosition='left'
						label='Last Name'
						placeholder='Last Name'
						name='lastName'
						onChange={handleChange}
						value={user.lastName}
						type='text'
					/>
					<Form.Input
						fluid
						type='date'
						value={user.birthday}
						onChange={handleChange}
						name='birthday'
					/>
					<Form.Group inline>
						<Form.Input
							fluid
							type='radio'
							label='Male'
							name='gender'
							value='male'
							checked={user.gender === 'male'}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							type='radio'
							label='Female'
							name='gender'
							value='female'
							checked={user.gender === 'female'}
							onChange={handleChange}
						/>
					</Form.Group>
					<Button
						icon='signup'
						type='submit'
						color='orange'
						content='Update Profile Details'
						disabled={disabled || loading}
					/>
				</Segment>
			</Form>
		</Container>
	)
}

export default connect(
	null,
	{ updateProfile }
)(AccountDetails)
