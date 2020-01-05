import axios from 'axios'

import { GET_FEATURED_PRODUCT, FEATURED_PRODUCT_ERROR, ADD_FEATURED_PRODUCT, REMOVE_FEATURED_PRODUCT } from './types'

export const getFeaturedProduct = () => async dispatch => {
  try {
    const { data } = await axios.post(
      'http://localhost:5001/floristeria-cra/us-central1/getFeaturedProducts'
    )
    dispatch({
      type: GET_FEATURED_PRODUCT,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: FEATURED_PRODUCT_ERROR,
      payload: error.message
    })
  }
}

export const addFeaturedProduct = payload => dispatch => {
  try {
    dispatch({
      type: ADD_FEATURED_PRODUCT,
      payload
    })
  } catch (error) {
    dispatch({
      type: FEATURED_PRODUCT_ERROR,
      payload: error.message
    })
  }
}

export const removeFeaturedProduct = payload => dispatch => {
  try {
    dispatch({
      type: REMOVE_FEATURED_PRODUCT,
      payload: payload
    })
  } catch (error) {
    dispatch({
      type: FEATURED_PRODUCT_ERROR,
      payload: error.message
    })
  }
}
