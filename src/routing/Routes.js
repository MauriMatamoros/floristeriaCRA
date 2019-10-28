import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Create from '../pages/Create'

const Routes = () => (
	<>
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/' component={Home} />
			<PrivateRoute exact path='/create' component={Create} />
		</Switch>
	</>
)

export default Routes
