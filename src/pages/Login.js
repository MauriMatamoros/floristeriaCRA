import React, { useState, useEffect } from 'react'
import {
  Button,
  Form,
  Icon,
  Message,
  Container,
  Grid,
  Segment
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
    const isUser = Object.values(user).every(element => Boolean(element))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  const handleChange = e => {
    const { name, value } = e.target
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
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
                  type='submit'
                  color='black'
                  content='Ingresar'
                  disabled={disabled || loading}
                />
              </Form>
            </Grid.Column>
            <Grid.Column className='col-lg-5 col-md-8 col-12'>
              <div
                className='view'
                style={{
                  backgroundImage: "url('./assets/flowers_login.jpg')",
                  width: 317,
                  height: 450,
                  backgroundPosition: 'center',

                  backgroundRepeat: 'repeat'
                }}
              >
                <Message attached='bottom'>
                  <Icon name='help' />
                  New user? <Link to='/signup'>Registrarse</Link> instead.{' '}
                  <Link to='/forgotPassword'>Olvidaste tu contraseña?</Link>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default Login
