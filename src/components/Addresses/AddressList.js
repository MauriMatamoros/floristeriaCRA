import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner/Spinner'
import { getAddresses } from '../../redux/actions/addresses'

const AddressList = ({ addresses, loading, getAddresses }) => {
	useEffect(() => {
		getAddresses()
	}, [getAddresses])
	return loading ? <Spinner /> : <div>hello</div>
}

const mapStateToProps = ({ addresses }) => ({
	addresses: addresses.addresses,
	loading: addresses.loading
})

export default connect(
	mapStateToProps,
	{ getAddresses }
)(AddressList)
