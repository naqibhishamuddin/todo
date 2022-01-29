import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';

export const Button = props => {
  const {
    isLoading,
    isDisabled,
    onPress,
    title,
    style,
    textStyle,
    ...restProps
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={isDisabled || isLoading}
      style={[styles.container, style]}
      {...restProps}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: 'Continue',
};
