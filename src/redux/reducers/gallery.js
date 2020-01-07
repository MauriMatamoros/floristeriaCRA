import { GET_GALLERY, GALLERY_ERROR, ADD_GALLERY, REMOVE_GALLERY } from '../actions/types'

const initialState = {
	galleries: [],
	loading: true,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_GALLERY:
			return {
				...state,
				galleries: [payload, ...state.galleries],
				loading: false
			}
		case GET_GALLERY:
			return {
				...state,
				galleries: payload,
				loading: false
			}
		case REMOVE_GALLERY:
			return {
				...state,
				galleries: state.galleries.filter((gallery) => gallery.id !== payload),
				loading: false
			}
		case GALLERY_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
