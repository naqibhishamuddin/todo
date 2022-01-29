import React from 'react';
import {Text} from 'react-native';
import {Screen, CustomInput, Button, BackButton} from 'components';
import {styles} from './styles';

export const SignUp = props => {
  const {
    onChangeFullName,
    onChangeEmailAddress,
    onChangePassword,
    onPressSignUp,
    isLoading,
  } = props;

  return (
    <Screen isScrollable style={styles.container}>
      {/** HEADER */}
      <BackButton isButtonCurve />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Start organize your tasks now</Text>

      {/** FULL NAME */}
      <CustomInput
        placeholder="John Labu"
        title="Ful Name"
        onChangeText={onChangeFullName}
        rootStyle={styles.root}
        containerStyle={styles.inputContainer}
      />

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

      {/** SIGN UP BUTTON */}
      <Button
        isLoading={isLoading}
        style={styles.button}
        onPress={onPressSignUp}
        title="Sign Up"
      />
    </Screen>
  );
};
