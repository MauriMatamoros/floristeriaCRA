// import { ADD_CART } from '../actions/types'

const initialState = {
    note: '',
    product_id: '',
    user_id: '',
    error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		// case ADD_NOTE:
		// 	return {
		// 		...state,
		// 		note: payload
        //     }
		// case CART_ERROR:
		// 	return {
		// 		...state,
		// 		error: payload
		// 	}
		default:
			return state
	}
}
