import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Create from '../pages/Create'
import CreateType from '../pages/CreateType'
import CreateAddress from '../pages/CreateAddress'
import Account from '../pages/Account'
import ForgotPassword from '../pages/ForgotPassword'

const Routes = () => (
	<>
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/' component={Home} />
			<Route exact path='/forgotPassword' component={ForgotPassword} />
			<PrivateRoute exact path='/create' component={Create} />
			<PrivateRoute exact path='/createType' component={CreateType} />
			<PrivateRoute exact path='/createAddress' component={CreateAddress} />
			<PrivateRoute exact path='/account' component={Account} />
		</Switch>
	</>
)

export default Routes
