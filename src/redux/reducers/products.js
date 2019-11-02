import { GET_PRODUCTS, PRODUCTS_ERROR } from '../actions/types'

const initialState = {
	products: [],
	page: 0,
	loading: true,
	lastChild: null,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				types: payload,
				loading: false
			}
		case PRODUCTS_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
