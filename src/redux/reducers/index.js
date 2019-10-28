import { combineReducers } from 'redux'

import auth from './auth'
import city from './city'

export default combineReducers({
	auth,
	city
})
