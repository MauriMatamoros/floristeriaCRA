import { CHANGE_CITY } from '../actions/types'

const initialState = {
	city: ''
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case CHANGE_CITY:
			return {
				...state,
				city: payload
			}
		default:
			return state
	}
}
