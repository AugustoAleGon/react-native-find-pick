/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { picTypes } from '../Redux/Reducers/pic'

/* ------------- Sagas ------------- */

import {
  getSearchPic
} from './picSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    // pic saga
    takeLatest(picTypes.GET_SEARCH_PIC, getSearchPic)
  ]
}
