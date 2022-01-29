import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Typography} from 'theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp('8%'),
    paddingHorizontal: wp('8%'),
  },
  title: {
    ...Typography.Header1,
    marginTop: hp('8%'),
    color: Colors.black,
  },
  subtitle: {
    ...Typography.Header3,
    fontWeight: '300',
    marginTop: hp('0.5%'),
    marginBottom: hp('6%'),
    color: Colors.black,
  },
  root: {
    marginTop: hp('2%'),
  },
  inputContainer: {
    width: wp('85%'),
  },
  button: {
    marginTop: hp('8%'),
    marginBottom: hp('16%'),
    width: wp('85%'),
  },
});
