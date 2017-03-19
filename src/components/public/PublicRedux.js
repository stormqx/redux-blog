/**
 * Created on 19/03/2017.
 */

const initialState = {
  slogan: 'Undefined',
}

// constants
const LOAD_SLOGAN = 'LOAD_SLOGAN';
const LOAD_SLOGAN_SUCCESS = 'LOAD_SLOGAN_SUCCESS';
const LOAD_SLOGAN_ERROR = 'LOAD_SLOGAN_ERROR';


// action creators
export function loadSlogan() {
  return {
    types: [LOAD_SLOGAN, LOAD_SLOGAN_SUCCESS, LOAD_SLOGAN_ERROR],
    url: '/api/slogan.json',
  };
}

// reducer
export default function Slogan(state = initialState, action) {
  switch (action.type) {
    case LOAD_SLOGAN: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_SLOGAN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        slogan: action.payload,
      };
    }

    case LOAD_SLOGAN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}