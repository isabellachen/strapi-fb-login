const initialState = {
  redirectUrl: ''
};

const getInitialState = () => {
  if (localStorage.getItem('initialState')) {
    return JSON.parse(localStorage.initialState);
  }
  return initialState;
};

const STORE_REDIRECT_URL = 'STORE_REDIRECT_URL';

const reducer = (state, action) => {
  switch (action.type) {
    case STORE_REDIRECT_URL:
      return {
        redirectUrl: action.payload.redirectUrl
      };
    default:
      return state;
  }
};

export { STORE_REDIRECT_URL, getInitialState, reducer };
