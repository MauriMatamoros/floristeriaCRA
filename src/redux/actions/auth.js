import axios from 'axios'

import { AUTH_ERROR, LOAD_USER, UPDATE_PROFILE, LOGIN } from './types'
import { firebase } from '../../firebase'

export const loadUser = (user) => async (dispatch) => {
	if (user) {
		const token = await firebase.auth().currentUser.getIdToken()
		const { data } = await axios.post(
			'http://localhost:5001/floristeria-cra/us-central1/getProfile',
			{ token }
		)
		user.profile = data
		dispatch({
			type: LOAD_USER,
			payload: user
		})
	} else {
		dispatch({
			type: AUTH_ERROR
		})
	}
}

export const login = () => (dispatch) =>
	dispatch({
		type: LOGIN
	})

export const updateProfile = (payload) => (dispatch) => {
	try {
		dispatch({
			type: UPDATE_PROFILE,
			payload
		})
	} catch (error) {
		dispatch({
			type: AUTH_ERROR
		})
	}
}
