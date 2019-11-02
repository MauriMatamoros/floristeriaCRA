import { GET_TYPES, TYPES_ERROR, ADD_TYPE, REMOVE_TYPE } from '../actions/types'

const initialState = {
	types: [],
	loading: true,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_TYPE:
			return {
				...state,
				types: [payload, ...state.types],
				loading: false
			}
		case GET_TYPES:
			return {
				...state,
				types: payload,
				loading: false
			}
		case REMOVE_TYPE:
			return {
				...state,
				types: state.types.filter((type) => type.id !== payload),
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
