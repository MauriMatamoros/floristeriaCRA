import { ADD_PRODUCT, REMOVE_PRODUCT } from './types'

export const addProduct = (payload) => (dispatch) => {
	try {
		dispatch({
			type: ADD_PRODUCT,
			payload
		})
	} catch (error) {
		console.error(error)
	}
}

export const removeProduct = (payload) => (dispatch) => {
	try {
		dispatch({
			type: REMOVE_PRODUCT,
			payload
		})
	} catch (error) {
		console.error(error)
	}
}
