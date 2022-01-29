import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Typography} from 'theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('8%'),
    paddingBottom: hp(10),
  },
  title: {
    ...Typography.Header1,
    color: Colors.black,
  },
  subtitle: {
    ...Typography.Header3,
    fontWeight: '300',
    marginTop: hp('0.5%'),
    marginBottom: hp('6%'),
    color: Colors.black,
  },
  inputContainer: {
    width: wp('80%'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  name: {
    marginLeft: wp('1.5%'),
    ...Typography.Header1,
    marginTop: hp('3%'),
    color: Colors.primary,
  },
  taskContainer: {
    backgroundColor: Colors.white,
  },
  task: {
    width: wp('80%'),
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  taskTitle: {
    ...Typography.Header4,
    marginBottom: hp('0.5%'),
  },
  taskDescription: {
    ...Typography.Body1,
    marginBottom: hp('0.5%'),
    color: Colors.divider,
  },
  taskDate: {
    ...Typography.Body3,
    color: Colors.divider,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: Colors.grayLine,
    marginVertical: hp('1.5%'),
  },
  footer: {
    height: hp('20%'),
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    right: 0,
  },
  avatarStyle: {
    width: hp('6%'),
    height: hp('6%'),
    borderRadius: hp('100%'),
    alignSelf: 'flex-end',
    marginTop: hp('2%'),
    backgroundColor: Colors.primary,
  },
  avatarText: {
    ...Typography.Body1,
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: hp('7%'),
    height: hp('7%'),
    borderRadius: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('5%'),
    right: wp('10%'),
    zIndex: 1,
  },
  empty: {
    textAlign: 'center',
    ...Typography.Body1,
    marginHorizontal: wp('5%'),
    lineHeight: hp('2.5%'),
  },
  deleteText: {
    ...Typography.Header5,
    color: 'red',
  },
  list: {
    marginTop: hp('2%'),
  },
});
