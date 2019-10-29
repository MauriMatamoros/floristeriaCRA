import { combineReducers } from 'redux'

import auth from './auth'
import city from './city'
import productTypes from './productTypes'

export default combineReducers({
	auth,
	city,
	productTypes
})
