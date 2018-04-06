import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getSearchPic: ['payload'],
  fetchedSearchPic: ['response'],
  requestFailed: ['error']
})

export const picTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  picList: []
})

/* ------------- Reducers ------------- */
const fetchedPics = (state, action) => ({
  ...state,
  picList: action.response
})

const failedRequest = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_FAILED]: failedRequest,
  [Types.FETCHED_SEARCH_PIC]: fetchedPics
})
