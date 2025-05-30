import { all, takeEvery, call, put, delay } from 'react-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure } from './slice'
import axios from 'axios'

function* fetchUsers() {
  try {
    yield delay(2000)

    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users/'
    )
    yield put(fetchUsersSuccess(response.data))
  } catch (err) {
    yield put(fetchUsersFailure(err.message))
  }
}

export default all([takeEvery('user/fetchUsers', fetchUsers)])
