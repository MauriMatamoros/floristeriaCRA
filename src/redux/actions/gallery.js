import axios from 'axios'

//import { firebase } from '../../firebase'
import { GET_GALLERY, GALLERY_ERROR, ADD_GALLERY, REMOVE_GALLERY } from './types'

export const getGallery = () => async dispatch => {
  try {
    const { data } = await axios.post(
      'http://localhost:5001/floristeria-cra/us-central1/getGallery'
    )
    dispatch({
      type: GET_GALLERY,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GALLERY_ERROR,
      payload: error.message
    })
  }
}

export const addGallery = payload => dispatch => {
  try {
    dispatch({
      type: ADD_GALLERY,
      payload
    })
  } catch (error) {
    dispatch({
      type: GALLERY_ERROR,
      payload: error.message
    })
  }
}

export const removeGallery = payload => dispatch => {
  try {
    dispatch({
      type: REMOVE_GALLERY,
      payload: payload
    })
  } catch (error) {
    dispatch({
      type: GALLERY_ERROR,
      payload: error.message
    })
  }
}
