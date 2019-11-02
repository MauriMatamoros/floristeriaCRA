import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const ADMIN_ROUTES = ['/create', '/createType']

const PrivateRoute = ({
	component: Component,
	auth: { isAuthenticated, loading, profile },
	location,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			!isAuthenticated && !loading ? (
				<Redirect to='/login' />
			) : !loading &&
			  ADMIN_ROUTES.includes(location.pathname) &&
			  profile.role !== 'admin' ? (
				<Redirect to='/login' />
			) : (
				<Component {...props} />
			)
		}
	/>
)

const mapStateToProps = ({ auth }) => ({ auth })

export default withRouter(connect(mapStateToProps)(PrivateRoute))
