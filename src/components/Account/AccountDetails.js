import React, { useState, useEffect } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
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
      const { name, lastName, birthday, gender, email } = user
      const token = await firebase.auth().currentUser.getIdToken()
      const { data } = await axios.post(
        'http://localhost:5001/floristeria-cra/us-central1/updateProfile',
        { token, name, lastName, birthday, gender, email }
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
    <div className='p-5' style={styles.container}>
      <Form
        error={Boolean(error)}
        onSubmit={handleSubmit}
        loading={loading}
        success={success}
        className='w-75'
      >
        <Message error header='Oops!' content={error || ''} />
        <Message
          success
          icon='check'
          header='Success!'
          content='Your profile has been updated.'
        />

        <Form.Input
          label='Nombre'
          placeholder='Nombre'
          name='name'
          onChange={handleChange}
          value={user.name}
          type='text'
        />
        <Form.Input
          label='Apellido'
          placeholder='Apellido'
          name='lastName'
          onChange={handleChange}
          value={user.lastName}
          type='text'
        />
        <Form.Input
          label='Correo'
          placeholder='Correo'
          name='email'
          onChange={handleChange}
          value={user.email}
          type='email'
        />
        <Form.Input
          className='w-50'
          label='Fecha de nacimiento'
          type='date'
          value={user.birthday}
          onChange={handleChange}
          name='birthday'
        />
        <Form.Group inline>
          <Form.Input
            type='radio'
            name='gender'
            label='Hombre'
            value='male'
            checked={user.gender === 'male'}
            onChange={handleChange}
          />
          <Form.Input
            type='radio'
            label='Mujer'
            name='gender'
            value='female'
            checked={user.gender === 'female'}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          type='submit'
          color='brown'
          content='Actualizar'
          disabled={disabled || loading}
        />
      </Form>
    </div>
  )
}

const mapStateToProps = ({ firebase: { profile } }) => ({
  ...profile
})

const styles = {
  container: {
    backgroundColor: '#D3D3D3'
  }
}

export default connect(
  mapStateToProps,
  { updateProfile }
)(AccountDetails)
