import React, { useState, useEffect } from 'react'
import {
  Button,
  Form,
  Grid,
  Message,
  Container,
  Image,
  Radio
} from 'semantic-ui-react'
//import { Link } from 'react-router-dom'
import axios from 'axios'

import { firebase } from '../firebase'

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
    const isUser = Object.values(user).every(element => Boolean(element))
    isUser && user.password === user.confirmPassword
      ? setDisabled(false)
      : setDisabled(true)
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
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
      const profile = {
        uid: response.user.uid,
        name: user.name,
        lastName: user.lastName,
        birthday: user.birthday,
        gender: user.gender
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
    <>
      <Container className='mbt-10em' style={styles.container}>
        <Container text>
          <Grid className='pl-4'>
            <Grid.Row centered className='mt-5'>
              <Grid.Column className='col-lg-6 col-md-6 col-sm-6 col-12'>
                {/* El button de facebook llevara al usuario a registrarse por medio de facebook */}
                <a
                  role='button'
                  onClick={() => alert('Ingresar mediante FaceBook')}
                >
                  <Image
                    src={'./assets/icons/btn_facebook.png'}
                    style={styles.imgFacebook}
                  />
                </a>
                <div className='mt-5 mb-4'>
                  <p className='h3 text-center'>Crear cuenta</p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column className='col-12'>
                <Form
                  error={Boolean(error)}
                  onSubmit={handleSubmit}
                  loading={loading}
                >
                  <Message error header='Oops!' content={error || ''} />
                  <Form.Group widths='equal' className='mb-5'>
                    <input
                      style={styles.inputStyle}
                      placeholder='Nombres'
                      name='name'
                      onChange={handleChange}
                      value={user.name}
                      type='text'
                      className='input-custom'
                    />
                    <div style={styles.separator}></div>
                    <input
                      style={styles.inputStyle}
                      placeholder='Apellidos'
                      name='lastName'
                      onChange={handleChange}
                      value={user.lastName}
                      type='text'
                      className='input-custom'
                    />
                  </Form.Group>

                  <Form.Group widths='equal' className='mb-5'>
                    <input
                      className='input-custom'
                      placeholder='Correo'
                      name='email'
                      onChange={handleChange}
                      value={user.email}
                      type='email'
                      style={styles.inputStyle}
                    />
                    <div style={styles.separator}></div>
                    <input
                      className='input-custom'
                      style={styles.inputStyle}
                      type='date'
                      value={user.birthday}
                      onChange={handleChange}
                      name='birthday'
                    />
                  </Form.Group>
                  <Form.Group widths='equal' className='mb-5'>
                    <input
                      className='input-custom'
                      style={styles.inputStyle}
                      placeholder='Contrasenia'
                      name='password'
                      onChange={handleChange}
                      value={user.password}
                      type='password'
                    />
                    <div style={styles.separator}></div>

                    <input
                      style={styles.inputStyle}
                      className='input-custom'
                      placeholder='Confirmar contrasenia'
                      name='confirmPassword'
                      onChange={handleChange}
                      value={user.confirmPassword}
                      type='password'
                    />
                  </Form.Group>

                  <Form.Group inline>
                    <label className='d-flex flex-row'>
                      <div className='pr-3'>
                        <p className='h6 font-weight-normal'>Hombre</p>
                      </div>
                      <Form.Input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={user.gender === 'male'}
                        onChange={handleChange}
                      />
                    </label>
                    <div style={styles.separator}></div>
                    <label className='d-flex flex-row'>
                      <div className='pr-3'>
                        <p className='h6 font-weight-normal'>Mujer</p>
                      </div>
                      <Form.Input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={user.gender === 'female'}
                        onChange={handleChange}
                      />
                    </label>
                  </Form.Group>
                  <div style={styles.buttonSubmitContainer} className='mb-5'>
                    <Radio toggle />
                    <p>He leido y acepto los términos y condiciones.</p>
                  </div>
                  <div style={styles.buttonSubmitContainer} className='pb-5'>
                    <Button
                      size='huge'
                      type='submit'
                      color='orange'
                      content='Crear cuenta'
                      disabled={disabled || loading}
                    />
                  </div>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Image src='./assets/footer_signup.png' style={styles.rounded} />
      </Container>
    </>
  )
}

export default Signup

const styles = {
  container: { backgroundColor: 'lightgray', padding: 0 },
  imgFacebook: {
    width: '100%',
    height: 60
  },
  separator: { paddingLeft: '5%', paddingRight: '5%' },
  inputStyle: {
    backgroundColor: '#D3D3D3',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    textDecoration: 'none'
  },
  buttonSubmitContainer: {
    width: '100%',
    textAlign: 'center'
  },
  rounded: {
    borderTopLeftRadius: '2%',
    borderTopRightRadius: '2%'
  }
}
