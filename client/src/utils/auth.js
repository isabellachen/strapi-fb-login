const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

const setToken = (value) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(value));
}

const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY));
}

const setUser = (value) => {
  localStorage.setItem(USER_INFO, JSON.stringify(value));
}

export default {setToken, getToken, setUser};