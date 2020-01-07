import { GET_FEATURED_PRODUCT, FEATURED_PRODUCT_ERROR } from '../actions/types'

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
		case GET_FEATURED_PRODUCT:
			return {
				...state,
				products: payload,
				loading: false
			}
		case FEATURED_PRODUCT_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
