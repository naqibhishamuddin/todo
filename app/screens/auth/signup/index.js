import React, {useState} from 'react';
import {requestRegister} from 'api';
import {flashMessage} from 'utils';
import {useStorage} from 'hooks';
import {SignUp} from './component';

export const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useStorage('user');

  const onChangeEmailAddress = enteredEmail => {
    setEmail(enteredEmail.trim());
  };

  const onChangePassword = enteredPassword => {
    setPassword(enteredPassword);
  };

  const onChangeFullName = enteredName => {
    setName(enteredName);
  };

  const onPressSignUp = async () => {
    setIsLoading(true);
    const response = await requestRegister({
      name: name,
      email: email,
      password: password,
    });

    if (response.status === 200 && response?.data?.message === 'success') {
      flashMessage({
        type: 'success',
        message: 'Successfully registered',
      });
      setUser(response?.data?.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      flashMessage({
        type: 'danger',
        message: 'Something went wrong while registering',
      });
    }
  };

  const props = {
    onChangeFullName,
    onChangeEmailAddress,
    onChangePassword,
    onPressSignUp,
    isLoading,
  };

  return <SignUp {...props} />;
};
