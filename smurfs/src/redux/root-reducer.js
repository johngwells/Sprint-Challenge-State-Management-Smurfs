import { 
  START_FETCHING, 
  FETCH_SUCCESS, 
  FETCH_FAILURE,
  POST_SMURF,
  POST_FAIL,
  ADD_SMURF
} from './actions/index';

export const INITIAL_STATE = {
  // STATE
  smurfs: [],
  isFetching: false,
  isAdding: false,
  error: ''
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case ADD_SMURF:
      return {
        ...state,
        isAdding: true,
        error: ''
      }
    case POST_SMURF:
      return {
        ...state,
        isAdding: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case POST_FAIL:
      return {
        ...state,
        isFetching: false,
        isAdding: false,
        error: action.payload
      }
    default:
      return state;
  };
};

export default useReducer;