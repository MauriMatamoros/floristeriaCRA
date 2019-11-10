import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {firebase} from './firebase';
import store from './redux/store';
import Routes from './routing/Routes';
import Layout from './components/layout/Layout';

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: 'users',
  attachAuthIsReady: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Layout>
            <Route component={Routes} />
          </Layout>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
