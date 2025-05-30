import {
  takeEvery,
  all,
  call,
  put,
  delay,
  takeLatest,
} from 'redux-saga/effects'
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} from './slice'
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

function* fetchUserById() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users/4'
    )
    yield put(fetchUserByIdSuccess(response.data))
  } catch (err) {
    yield put(fetchUserByIdFailure(err.message))
  }
}

export default all([
  takeLatest(
    'user/fetchUsers',
    fetchUsers,
    takeEvery('user/fetchUserById', fetchUserById)
  ),
])
