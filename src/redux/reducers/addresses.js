import {
	GET_ADDRESSES,
	ADDRESS_ERROR,
	REMOVE_ADDRESS,
	ADD_ADDRESS
} from '../actions/types'

const initialState = {
	addresses: [],
	loading: true,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_ADDRESS:
			return {
				...state,
				addresses: [payload, ...state.addresses],
				loading: false
			}
		case GET_ADDRESSES:
			return {
				...state,
				addresses: payload,
				loading: false
			}
		case REMOVE_ADDRESS:
			console.log(payload)
			return {
				...state,
				addresses: state.addresses.filter((address) => address.id !== payload),
				loading: false
			}
		case ADDRESS_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
