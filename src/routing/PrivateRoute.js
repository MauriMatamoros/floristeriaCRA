import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const ADMIN_ROUTES = ['/create', '/createType'];

const PrivateRoute = ({
  component: Component,
  auth,
  profile,
  location,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return auth.isEmpty && profile.isEmpty ? (
        <Redirect to='/login' />
      ) : !profile.isEmpty &&
        ADMIN_ROUTES.includes(location.pathname) &&
        profile.role !== 'admin' ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = ({firebase: {auth, profile}}) => ({auth, profile});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
