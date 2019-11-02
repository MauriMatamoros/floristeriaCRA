import axios from 'axios'

import { firebase } from '../../firebase'
import { GET_TYPES, TYPES_ERROR, ADD_TYPE, REMOVE_TYPE } from './types'

export const getTypes = () => async (dispatch) => {
	try {
		const token = await firebase.auth().currentUser.getIdToken()
		const { data } = await axios.post(
			'http://localhost:5001/floristeria-cra/us-central1/getTypes',
			{ token }
		)
		dispatch({
			type: GET_TYPES,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: TYPES_ERROR,
			payload: error.message
		})
	}
}

export const addType = (payload) => (dispatch) => {
	try {
		dispatch({
			type: ADD_TYPE,
			payload
		})
	} catch (error) {
		dispatch({
			type: TYPES_ERROR,
			payload: error.message
		})
	}
}

export const removeType = (payload) => (dispatch) => {
	try {
		dispatch({
			type: REMOVE_TYPE,
			payload: payload
		})
	} catch (error) {
		dispatch({
			type: TYPES_ERROR,
			payload: error.message
		})
	}
}
