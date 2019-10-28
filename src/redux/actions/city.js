import { CHANGE_CITY } from './types'

export const setCity = (city) => (dispatch) =>
	dispatch({
		type: CHANGE_CITY,
		payload: city
	})
