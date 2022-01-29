import auth from './authApi';

export const requestRegister = async props => {
  const {name, email, password} = props;
  const response = await auth.post('registration', {name, email, password});
  return response;
};

export const requestLogin = async props => {
  const {email, password} = props;
  const response = await auth.post('login', {email, password});
  return response;
};
