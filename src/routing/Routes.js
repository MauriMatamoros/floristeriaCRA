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
import Products from '../pages/Products'
import Gallery from '../pages/Gallery'
import Arrays from '../pages/Arrays'
import FormProductPay from '../pages/FormProductPay'
import Blog from '../pages/Blog'
import New from '../pages/New'
import CreateCoupons from '../pages/CreateCoupons'
import MethodPay from '../components/Products/MethodPay'

const Routes = () => (
  <>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/' component={Home} />
      <Route exact path='/forgotPassword' component={ForgotPassword} />
      <Route exact path='/products/:type/:page?' component={Products} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/arrays' component={Arrays} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/new' component={New} />
      <Route exact path='/method-pay' component={MethodPay} />
      <Route exact path='/form_card_product' component={FormProductPay} />
      <PrivateRoute exact path='/create' component={Create} />
      <PrivateRoute exact path='/createType' component={CreateType} />
      <Route exact path='/createCoupons' component={CreateCoupons} />
      <PrivateRoute exact path='/createAddress' component={CreateAddress} />
      <PrivateRoute exact path='/account' component={Account} />
    </Switch>
  </>
)

export default Routes
