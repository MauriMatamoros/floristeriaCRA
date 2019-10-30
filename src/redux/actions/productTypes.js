import database from '../../firebase'
import { GET_TYPES, TYPES_ERROR } from './types'

export const getTypes = () => async (dispatch) => {
	try {
		const snapshot = await database.ref('/types').once('value')
		const payload = []
		snapshot.forEach((childSnapshot) =>
			payload.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			})
		)
		dispatch({
			type: GET_TYPES,
			payload
		})
	} catch (error) {
		dispatch({
			type: TYPES_ERROR,
			payload: error.message
		})
	}
}
