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

import { firebase } from '../firebase'

const Login = () => {
	const INITIAL_USER = {
		email: '',
		password: ''
	}
	const [user, setUser] = useState(INITIAL_USER)
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const isUser = Object.values(user).every((element) => Boolean(element))
		isUser ? setDisabled(false) : setDisabled(true)
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
			await firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
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
				icon='privacy'
				header='Welcome Back!'
				content='Log in with email and password.'
				color='blue'
			/>
			<Form error={Boolean(error)} onSubmit={handleSubmit} loading={loading}>
				<Message error header='Oops!' content={error} />
				<Segment>
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
					<Button
						icon='sign in'
						type='submit'
						color='orange'
						content='Login'
						disabled={disabled || loading}
					/>
				</Segment>
			</Form>
			<Message attached='bottom' warning>
				<Icon name='help' />
				New user? <Link to='/signup'>Sign up here</Link> instead.{' '}
				<Link to='/forgotPassword'>Forgot your password?</Link>
			</Message>
		</Container>
	)
}

export default Login
