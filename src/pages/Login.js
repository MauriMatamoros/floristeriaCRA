import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
	Button,
	Form,
	Message,
	Container,
	Grid,
	Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { firebase } from '../firebase'
import { login } from '../redux/actions/auth'

const Login = ({ login }) => {
	const history = useHistory()
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
			setLoading(false)
			login()
			history.push('/account')
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}
	return (
		<Container className='mbt-10em w-75'>
			<Segment>
				<Grid centered className='pt-5 pb-5'>
					<Grid.Row className='text-center'>
						<Grid.Column className='col-lg-5 col-md-8 col-12 align-self-center'>
							<div className='alert alert-light text-center' role='alert'>
								<p className='h3 font-weight-normal'>
									Ya eres <span className='font-weight-bold'>miembro</span>?
								</p>
							</div>
							<Form
								error={Boolean(error)}
								onSubmit={handleSubmit}
								loading={loading}
							>
								<Message error header='Oops!' content={error} />

								<Form.Input
									placeholder='Correo'
									name='email'
									onChange={handleChange}
									value={user.email}
									type='email'
								/>
								<Form.Input
									placeholder='Contraseña'
									name='password'
									onChange={handleChange}
									value={user.password}
									type='password'
								/>
								<Button
									className='mb-5'
									type='submit'
									color='black'
									content='Ingresar'
									disabled={disabled || loading}
								/>
							</Form>
						</Grid.Column>
						<Grid.Column className='col-lg-5 col-md-8 col-12'>
							<div className='view' style={styles.backgroundView}>
								<div style={styles.buttonFloat}>
									<Link
										to='/signup'
										role='button'
										className='btn w-100 font-weight-bold'
										style={styles.btnRegister}
									>
										Registrarse
									</Link>
									<Link
										to='/forgotpassword'
										role='button'
										className='btn w-100 font-weight-bold'
										style={styles.btnPass}
									>
										Olvidaste tu contraseña?
									</Link>
								</div>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Container>
	)
}

export default connect(
	null,
	{ login }
)(Login)

// Styles
const styles = {
	buttonFloat: {
		position: 'absolute',
		top: '75%',
		left: '0',
		right: '0',
		bottom: '10%',
		margin: 'auto',
		width: '65%'
	},
	backgroundView: {
		backgroundImage: 'url(./assets/flowers_login.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '70vh'
	},
	btnRegister: {
		backgroundColor: '#00B5AD',
		color: 'white',
		fontSize: '1rem'
	},
	btnPass: { backgroundColor: '#6435C9', color: 'white', fontSize: '1rem' }
}
