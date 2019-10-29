import { GET_TYPES, TYPES_ERROR } from '../actions/types'

const initialState = {
	types: [],
	loading: true,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_TYPES:
			return {
				...state,
				types: payload,
				loading: false
			}
		case TYPES_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
