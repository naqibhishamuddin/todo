import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Typography = {
  Header1: {
    fontWeight: 'bold',
    fontSize: hp('4%'),
    lineHeight: hp('4.5%'),
  },
  Header2: {
    fontWeight: 'bold',
    fontSize: hp('3.3%'),
    lineHeight: hp('3.8%'),
  },
  Header3: {
    fontWeight: '400',
    fontSize: hp('2.8%'),
    lineHeight: hp('3.5%'),
  },
  Header4: {fontWeight: '500', fontSize: hp('2%')},
  Header5: {fontWeight: '300', fontSize: hp('2%')},
  Header6: {fontWeight: 'bold', fontSize: hp('1.8%')},
  Header7: {fontWeight: '300', fontSize: hp('1.8%')},
  Header8: {fontWeight: '300', fontSize: hp('1.5%')},
  Body1: {fontWeight: '300', fontSize: hp('1.8%')},
  Body2: {fontWeight: '300', fontSize: hp('1.6%')},
  Body3: {fontWeight: '300', fontSize: hp('1.4%')},
  Body4: {fontWeight: '300', fontSize: hp('1.2%')},
};
