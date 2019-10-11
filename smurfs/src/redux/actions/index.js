import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_SMURF = 'POST_SMURF';
export const POST_FAIL = 'POST_FAIL';
export const ADD_SMURF = 'ADD_SMURF';

// action creator
export const fetchSmurfs = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.res }))
}

// add smurf
export const postSmurf = (data) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', data)
    .then(res => dispatch({ type: POST_SMURF, payload: data }))
    .catch(err => dispatch({ type: POST_FAIL, payload: err.res }))
}