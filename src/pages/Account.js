import React from 'react';
import {Container} from 'semantic-ui-react';
import {connect} from 'react-redux';

import AccountHeader from '../components/Account/AccountHeader';
// import AccountOrders from '../components/Account/AccountOrders'
import ChangePassword from '../components/Account/ChangePassword';
import AccountDetails from '../components/Account/AccountDetails';
import Spinner from '../components/Spinner/Spinner';

const Account = ({profile}) => {
  return !profile.isLoaded ? (
    <Spinner />
  ) : (
    <Container text className='pt-6em'>
      <AccountHeader />
      <AccountDetails />
      {/* <AccountOrders orders={orders} /> */}
      <ChangePassword />
    </Container>
  );
};

const mapStateToProps = ({firebase: {auth, profile}}) => ({
  auth,
  profile
});

export default connect(mapStateToProps)(Account);
