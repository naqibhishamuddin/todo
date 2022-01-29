import React from 'react';
import {Text} from 'react-native';
import {Screen, CustomInput, Button} from 'components';
import {styles} from './styles';

export const Login = props => {
  const {
    onChangeEmailAddress,
    onChangePassword,
    onPressLogin,
    onPressRegister,
    isLoading,
  } = props;

  return (
    <Screen isScrollable style={styles.container}>
      {/** HEADER */}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Let's get started</Text>

      {/** EMAIL */}
      <CustomInput
        placeholder="johnlabu@gmail.com"
        title="Email Address"
        onChangeText={onChangeEmailAddress}
        rootStyle={styles.root}
        containerStyle={styles.inputContainer}
      />

      {/** PASSWORD */}
      <CustomInput
        placeholder="Password"
        title="Password"
        onChangeText={onChangePassword}
        isPassword
        rootStyle={styles.root}
        containerStyle={styles.inputContainer}
      />

      {/** LOGIN BUTTON */}
      <Button
        isLoading={isLoading}
        style={styles.button}
        onPress={onPressLogin}
        title="Sign In"
      />

      {/** SIGN UP  */}
      <Text style={styles.instructions}>
        Doesn't have any account?
        <Text style={styles.signUpNow} onPress={onPressRegister}>
          {' Click here to sign up now'}
        </Text>
      </Text>
    </Screen>
  );
};
