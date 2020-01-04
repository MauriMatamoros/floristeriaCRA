import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/types'

const initialState = {
	products: []
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_PRODUCT:
			return { products: [...state.products, payload] }
		case REMOVE_PRODUCT:
			return { products: state.products.filter(({ id }) => id !== payload) }
		default:
			return state
	}
}
