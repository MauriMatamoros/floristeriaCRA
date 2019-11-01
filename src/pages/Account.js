import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import AccountHeader from '../components/Account/AccountHeader'
// import AccountOrders from '../components/Account/AccountOrders'
import ChangePassword from '../components/Account/ChangePassword'
import AccountDetails from '../components/Account/AccountDetails'
import Spinner from '../components/Spinner/Spinner'

const Account = ({ user, profile, loading }) => {
	return loading ? (
		<Spinner />
	) : (
		<Container text className='pt-6em'>
			<AccountHeader {...profile} />
			<AccountDetails {...profile} />
			{/* <AccountOrders orders={orders} /> */}
			<ChangePassword />
		</Container>
	)
}

const mapStateToProps = ({ auth: { user, profile, loading } }) => ({
	user,
	profile,
	loading
})

export default connect(mapStateToProps)(Account)
