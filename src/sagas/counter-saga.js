import { put, takeEvery } from 'redux-saga/effects'
import actionTypes, { fetchInitialSucceeded, fetchInitialFailed } from 'actions'
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchInitiall(action) {
    try {
        console.log('LLAMADA A AXIOS')
        const response = yield axios.get('http://www.mocky.io/v2/5b3a5ffd2e0000b1161581e6');
        console.log('fetchInitialSucceeded')
        yield put(fetchInitialSucceeded(response.data.counter));
    } catch (e) {
        console.log('FAIL')
        yield put(fetchInitialFailed(e));
    }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* aperturaSaga() {
    yield takeEvery(actionTypes.FETCH_INITIAL_COUNTER, fetchInitiall);
}
export default aperturaSaga;
