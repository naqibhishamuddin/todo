import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from 'theme';
import {styles} from './styles';

export const BackButton = props => {
  const {style, isButtonCurve} = props;
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={[styles.backButton, style]}
      activeOpacity={0.8}
      onPress={onPressBack}>
      {isButtonCurve ? (
        <Feather name="corner-up-left" color={Colors.black} size={hp('4%')} />
      ) : (
        <Icon name="keyboard-backspace" color={Colors.black} size={hp('5%')} />
      )}
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  isButtonCurve: false,
};
