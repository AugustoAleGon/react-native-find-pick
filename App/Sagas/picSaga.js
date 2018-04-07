import {call, put} from 'redux-saga/effects'
import { toJson } from 'unsplash-js/src/unsplash'
import {
  getSearchPic as getSearchPicRequest
} from '../Services'
import picActions from '../Redux/Reducers/pic'

export function * getSearchPic (action) {
  const { fetchedPics, requestFailed } = picActions
  const { payload } = action
  const responseList = yield call(getSearchPicRequest, payload)
  if (responseList.ok) {
    const responseNew = yield call(toJson.bind(this, responseList))
    yield put(fetchedPics({ picList: responseNew.results }))
  } else {
    yield put(requestFailed('Error'))
  }
}
