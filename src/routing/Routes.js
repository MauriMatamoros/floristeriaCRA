import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Create from '../pages/Create'
import CreateType from '../pages/CreateType'

const Routes = () => (
	<>
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/' component={Home} />
			<PrivateRoute exact path='/create' component={Create} />
			<PrivateRoute exact path='/createType' component={CreateType} />
		</Switch>
	</>
)

export default Routes
