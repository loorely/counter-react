import counterSaga from 'sagas/counter-saga';

function* rootSaga() {
    yield [
        counterSaga(),
    ];
}

export default rootSaga;