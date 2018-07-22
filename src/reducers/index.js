import actionTypes from '../actions/';

const defaultState = {
    counter: 0,
    error: ''
}

const rootReducer = (state = defaultState, action) => {
    console.log('------------------')
    console.log(action.type);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.FETCH_INITIAL_COUNTER_SUCCEEDED:
            console.log('FETCH_INITIAL_COUNTER_SUCCEEDED')
            return {
                ...state,
                counter: action.data
            }
        case actionTypes.FETCH_INITIAL_COUNTER_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }

}

export default rootReducer;