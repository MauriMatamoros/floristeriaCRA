import {
	GET_TRENDS,
	TRENDS_ERROR,
	ADD_TREND,
	REMOVE_TREND
} from '../actions/types'

const initialState = {
	trends: [],
	loading: true,
	error: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_TREND:
			return {
				...state,
				trends: [payload, ...state.trends],
				loading: false
			}
		case GET_TRENDS:
			return {
				...state,
				trends: payload,
				loading: false
			}
		case REMOVE_TREND:
			return {
				...state,
				trends: state.trends.filter((trend) => trend.id !== payload),
				loading: false
			}
		case TRENDS_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		default:
			return state
	}
}
