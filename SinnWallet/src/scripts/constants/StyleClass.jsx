import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const loginStyles = {
  loginContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'stretch',
    width: wp('100%'),
    height: hp('100%'),
    //backgroundColor: constantClass.colors.loginBgColor,
  },
  inputView: {
    flexDirection: 'row',
    //alignItems: 'center',
  },
  inputStyle: {
    borderRadius: 10,
  },
  enterButton: {
    marginLeft: '10%',
    marginRight: '8%',
    marginTop: '1%',
    marginBottom: '15%',
  },
};

export const profileStyles = {
  avatarView: {
    alignItems: 'center',
    height: wp('30%'),
    marginTop: '25%',
    marginBottom: '40%',
  },
};
