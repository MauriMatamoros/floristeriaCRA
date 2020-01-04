import axios from 'axios'

//import { firebase } from '../../firebase'
import { GET_TRENDS, TRENDS_ERROR, ADD_TREND, REMOVE_TREND } from './types'

export const getTrends = () => async (dispatch) => {
	try {
		const { data } = await axios.post(
			'http://localhost:5001/floristeria-cra/us-central1/getTrend'
		)
		dispatch({
			type: GET_TRENDS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: TRENDS_ERROR,
			payload: error.message
		})
	}
}

export const addTrend = (payload) => (dispatch) => {
	try {
		dispatch({
			type: ADD_TREND,
			payload
		})
	} catch (error) {
		dispatch({
			type: TRENDS_ERROR,
			payload: error.message
		})
	}
}

export const removeTrend = (payload) => (dispatch) => {
	try {
		dispatch({
			type: REMOVE_TREND,
			payload: payload
		})
	} catch (error) {
		dispatch({
			type: TRENDS_ERROR,
			payload: error.message
		})
	}
}
