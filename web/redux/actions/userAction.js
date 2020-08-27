import axios from 'axios';

export const usersFetch = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch({ type: 'GET_USERS', payload: res.data }));
  };
};
