import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { firebase } from './firebase'
import store from './redux/store'
import { loadUser } from './redux/actions/auth'
import Routes from './routing/Routes'
import Layout from './components/layout/Layout'

const App = () => {
	useEffect(
		() =>
			firebase
				.auth()
				.onAuthStateChanged((user) => store.dispatch(loadUser(user))),
		[]
	)
	return (
		<Provider store={store}>
			<Router>
				<Layout>
					<Route component={Routes} />
				</Layout>
			</Router>
		</Provider>
	)
}

export default App
