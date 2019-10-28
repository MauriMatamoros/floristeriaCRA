import { AUTH_ERROR, LOAD_USER } from './types'
import database from '../../firebase'

export const loadUser = (user) => async (dispatch) => {
	if (user) {
		const snapshot = await database.ref(`users/${user.uid}`).once('value')
		user.profile = snapshot.val()
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
