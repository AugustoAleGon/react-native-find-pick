import {call, put} from 'redux-saga/effects'
import {
  getSearchPic as getSearchPicRequest
} from '../Services'
import picActions from '../Redux/Reducers/pic'

export function * getSearchPic (action) {
  const { fetchedPics, requestFailed } = picActions
  const responseList = yield call(getSearchPicRequest)
  if (responseList.ok) {
    const { data } = responseList
    yield put(fetchedPics({ picList: data.message }))
  } else {
    yield put(requestFailed(responseList.error))
  }
}
