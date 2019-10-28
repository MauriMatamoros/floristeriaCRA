import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

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
			  location.pathname === '/create' &&
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
