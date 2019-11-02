import axios from 'axios'

import { AUTH_ERROR, LOAD_USER } from './types'
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
