import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Typography} from 'theme';

export const styles = StyleSheet.create({
  root: {flex: 1},
  title: {
    marginBottom: hp('1.5%'),
    ...Typography.Header5,
    fontWeight: '400',
  },
  container: {
    borderRadius: hp('0.8%'),
    width: wp('70%'),
    height: hp('7%'),
    backgroundColor: Colors.ultralight,
    paddingHorizontal: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    ...Typography.Body1,
    marginRight: wp('2%'),
  },
  callingCode: {...Typography.Body1},
  errorBorder: {
    borderWidth: 0.5,
    borderColor: Colors.red,
  },
  errorMessage: {
    ...Typography.Body1,
    marginTop: hp('1.5%'),
    color: Colors.red,
  },
  iconContainer: {
    width: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
