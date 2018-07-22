const actionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	FETCH_INITIAL_COUNTER_FAILED: 'FETCH_INITIAL_COUNTER_FAILED',
	FETCH_INITIAL_COUNTER_SUCCEEDED: 'FETCH_INITIAL_COUNTER_SUCCEEDED',
	FETCH_INITIAL_COUNTER: 'FETCH_INITIAL_COUNTER'
}

const increment = () => ({
	type: actionTypes.INCREMENT
});

const decrement = () => ({
	type: actionTypes.DECREMENT
});

const fetchInitialSucceeded = data => ({
	type: actionTypes.FETCH_INITIAL_COUNTER_SUCCEEDED,
	data
});

const fetchInitialFailed = error => ({
	type: actionTypes.FETCH_INITIAL_COUNTER_FAILED,
	error
});

const fetchInitial = () => ({
	type: actionTypes.FETCH_INITIAL_COUNTER,
});


export default actionTypes;
export { increment, decrement, fetchInitialSucceeded, fetchInitialFailed, fetchInitial };