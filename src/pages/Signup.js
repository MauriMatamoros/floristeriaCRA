import React, { useState, useEffect } from 'react'
import {
	Button,
	Form,
	Icon,
	Message,
	Segment,
	Container
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import database, { firebase } from '../firebase'

const Signup = () => {
	const INITIAL_USER = {
		name: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		birthday: '',
		gender: ''
	}
	const [user, setUser] = useState(INITIAL_USER)
	const [disabled, setDisabled] = useState(true)
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
			const response = await firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
			const profile = {
				uid: response.user.uid,
				name: user.name,
				lastName: user.lastName,
				birthday: user.birthday,
				gender: user.gender,
				role: 'client'
			}
			await axios.post(
				'http://localhost:5001/floristeria-cra/us-central1/createProfile',
				profile
			)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	return (
		<Container text className='pt-6em'>
			<Message
				attached
				icon='settings'
				header='Get Started'
				content='Create a new account'
				color='teal'
			/>
			<Form error={Boolean(error)} onSubmit={handleSubmit} loading={loading}>
				<Message error header='Oops!' content={error || ''} />
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
						icon='envelope'
						iconPosition='left'
						label='Email'
						placeholder='Email'
						name='email'
						onChange={handleChange}
						value={user.email}
						type='email'
					/>
					<Form.Input
						fluid
						icon='lock'
						iconPosition='left'
						label='Password'
						placeholder='Password'
						name='password'
						onChange={handleChange}
						value={user.password}
						type='password'
					/>
					<Form.Input
						fluid
						icon='lock'
						iconPosition='left'
						label='Confirm Password'
						placeholder='Password'
						name='confirmPassword'
						onChange={handleChange}
						value={user.confirmPassword}
						type='password'
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
						content='Signup'
						disabled={disabled || loading}
					/>
				</Segment>
			</Form>
			<Message attached='bottom' warning>
				<Icon name='help' />
				Existing user? <Link to='/login'>Log in here</Link> instead
			</Message>
		</Container>
	)
}

export default Signup
