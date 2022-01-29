import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from 'theme';
import {styles} from './styles';

export const CustomInput = props => {
  const {
    title,
    onChangeText,
    placeholder,
    value,
    containerStyle,
    inputStyle,
    titleStyle,
    isError,
    errorMessage,
    isPassword,
    secureTextEntry,
    isSearchBar,
    rootStyle,
    ...restProps
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onPressEye = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.root, rootStyle]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View
        style={[
          styles.container,
          containerStyle,
          isError && styles.errorBorder,
        ]}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.divider}
          style={[styles.input, inputStyle]}
          secureTextEntry={!isPassword ? false : !isPasswordVisible}
          value={value}
          {...restProps}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onPressEye}
            activeOpacity={0.8}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={hp('3%')}
              color={Colors.light}
            />
          </TouchableOpacity>
        )}
        {isSearchBar && (
          <Icon name="magnify" size={hp('3%')} color={Colors.light} />
        )}
      </View>
      {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

CustomInput.defaultProps = {
  placeholder: 'John Doe',
  isError: false,
  errorMessage: 'This field is required',
  isPassword: false,
  isPhone: false,
  isSearchBar: false,
};
