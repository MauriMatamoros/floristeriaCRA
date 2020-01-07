import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import {
  Form,
  Input,
  Button,
  Image,
  Message,
  Header,
  Icon,
  Container
} from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'

import { addFeaturedProduct, getFeaturedProduct } from '../redux/actions/featuredProducts'
import Spinner from '../components/Spinner/Spinner'
import { firebaseConnect } from 'react-redux-firebase'
import FeaturedProductsList from '../components/FeaturedProducts/FeaturedProductsList'


const CreateFeatured = ({ getFeaturedProduct, addFeaturedProduct, userLoading, firebase }) => {
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
    const isType = Object.values(type).every(element => Boolean(element))
    isType ? setDisabled(false) : setDisabled(true)
  }, [type])

  const handleChange = e => {
    const { name, value, files } = e.target
    if (name === 'media') {
      setType(prevState => ({ ...prevState, media: files[0] }))
      setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setType(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleImageUpload = async featuredProduct => {
    await firebase
      .storage()
      .ref(`featuredProducts/${featuredProduct}-${type.media.name}`)
      .put(type.media)
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      setLoading(true)
      setError('')
      const { name, media } = type
      const token = await firebase.auth().currentUser.getIdToken()
      const { data } = await axios.post(
        'http://localhost:5001/floristeria-cra/us-central1/postFeatured',
        { token, name, image: media.name }
      )
      await handleImageUpload(data.id)
      addFeaturedProduct(data)
      getFeaturedProduct()
      setType(INITIAL_TYPE)
      setSuccess(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return userLoading ? (
    <Spinner />
  ) : (
    <Container className='mbt-10em'>
      <Header as='h2' block>
        <Icon name='add' color='orange' />
        Set new featured Products
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
          content='Your featured product has been posted.'
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
      <FeaturedProductsList />
    </Container>
  )
}

const mapStateToProps = ({ firebase: { profile } }) => ({
  userLoading: !profile.isLoaded
})

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    { addFeaturedProduct, getFeaturedProduct }
  )
)(CreateFeatured)