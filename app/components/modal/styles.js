import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Typography} from 'theme';

export const styles = StyleSheet.create({
  modal: {margin: 0, justifyContent: 'flex-end'},
  container: {
    backgroundColor: Colors.white,
    height: hp('55%'),
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('3%'),
    borderTopLeftRadius: hp('1%'),
    borderTopRightRadius: hp('1%'),
  },
  root: {},
  inputContainer: {
    width: wp('82%'),
  },
  button: {
    width: wp('82%'),
  },
  placeholder: {
    marginBottom: hp('1.5%'),
    ...Typography.Header5,
    fontWeight: '400',
  },
  dateContainer: {
    width: wp('82%'),
    height: hp('7%'),
    backgroundColor: Colors.ultralight,
    paddingHorizontal: wp('2%'),
    justifyContent: 'center',
    borderRadius: hp('0.8%'),
    marginBottom: hp('6%'),
  },
  selectedDate: {
    ...Typography.Body1,
  },
});
