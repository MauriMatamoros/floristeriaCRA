import { LOAD_USER, AUTH_ERROR, UPDATE_PROFILE, LOGIN } from '../actions/types'

const initialState = {
	user: null,
	loading: true,
	isAuthenticated: null,
	profile: null
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case LOGIN:
			return {
				...state,
				loading: true
			}
		case LOAD_USER:
			return {
				...state,
				user: payload,
				loading: false,
				isAuthenticated: true,
				profile: payload.profile
			}
		case UPDATE_PROFILE:
			return {
				...state,
				loading: false,
				profile: payload
			}
		case AUTH_ERROR:
			return {
				...state,
				user: null,
				loading: false,
				isAuthenticated: false,
				profile: null
			}
		default:
			return state
	}
}
