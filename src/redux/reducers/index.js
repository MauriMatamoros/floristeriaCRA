import {combineReducers} from 'redux';

import auth from './auth';
import city from './city';
import productTypes from './productTypes';
import addresses from './addresses';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth,
  city,
  productTypes,
  addresses
});
