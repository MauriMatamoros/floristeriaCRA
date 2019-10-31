import axios from 'axios'

import {
	ADD_ADDRESS,
	GET_ADDRESSES,
	REMOVE_ADDRESS,
	ADDRESS_ERROR
} from './types'
import { firebase } from '../../firebase'

export const getAddresses = () => async (dispatch) => {
	try {
		const token = await firebase.auth().currentUser.getIdToken()
		const { data } = await axios.post(
			'http://localhost:5001/floristeria-cra/us-central1/getAddresses',
			{ token }
		)
		dispatch({
			type: GET_ADDRESSES,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: ADDRESS_ERROR,
			payload: error.message
		})
	}
}

export const addAddress = (payload) => (dispatch) => {
	try {
		dispatch({
			type: ADD_ADDRESS,
			payload
		})
	} catch (error) {
		dispatch({
			type: ADDRESS_ERROR,
			payload: error.message
		})
	}
}
