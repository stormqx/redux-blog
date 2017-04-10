/**
 * Created on 19/03/2017.
 */
// constants
const LOAD_SLOGAN = 'LOAD_SLOGAN';
const LOAD_SLOGAN_SUCCESS = 'LOAD_SLOGAN_SUCCESS';
const LOAD_SLOGAN_ERROR = 'LOAD_SLOGAN_ERROR';

const initialState = {
  slogan: 'Undefined',
};


// action creators
export function loadSlogan() {
  return (dispatch) => {
    dispatch({type: LOAD_SLOGAN});
    // 开始下载
    fetch('/api/slogan.json')
      .then(res => {
        return res.json();
      })
      .then( data => {
        dispatch({type: LOAD_SLOGAN_SUCCESS, payload: data.slogan});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: LOAD_SLOGAN_ERROR});
      })
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