import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Typography} from 'theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: hp('1%'),
    width: wp('65%'),
    height: hp('7%'),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    ...Typography.Header4,
    color: Colors.white,
  },
});
