import React, {useState} from 'react';
import {requestLogin} from 'api';
import {routes} from 'navigations';
import {flashMessage} from 'utils';
import {Login} from './component';
import {useStorage} from 'hooks';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [, setUser] = useStorage('user');

  const onChangeEmailAddress = enteredEmail => {
    setEmail(enteredEmail.trim());
  };

  const onChangePassword = enteredPassword => {
    setPassword(enteredPassword);
  };

  const onPressLogin = async () => {
    setIsLoading(true);
    const response = await requestLogin({email: email, password: password});
    if (response.status === 200 && response?.data?.message === 'success') {
      setUser(response?.data?.data);
      flashMessage({
        type: 'success',
        message: 'Successfully login',
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      flashMessage({
        type: 'danger',
        message: 'Something went wrong while login',
      });
    }
  };

  const onPressRegister = () => {
    navigation.navigate(routes.SIGN_UP);
  };

  const props = {
    onChangeEmailAddress,
    onChangePassword,
    onPressLogin,
    onPressRegister,
    isLoading,
  };

  return <Login {...props} />;
};
