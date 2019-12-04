import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export const splashStyles = {    

    viewMaior: {
      flex: 1,
      flexDirection: 'column',
    },

    viewSelo: {
      marginLeft: wp('42%'),
      marginTop: hp('3%'),
    },

    imagemSelo: {
      width: 65,
      height: 65,
    },

    viewLogo: {
      marginLeft: wp('15%'),
      marginTop: hp('15%'),
    },

    imagemLogo: {
      width: 300,
      height: 50,
    },

    viewIcone: {
      marginLeft: wp('20%'),
      marginTop: hp('2.5%'),
    },

    imagemIcone: {
      width: 250,
      height: 150,
    },

    viewTextoUm: {
      marginLeft: wp('10.5%'),
      marginTop: hp('8%'),
    },

    texto: {
      color: '#FFFF',
      fontWeight: 'bold',
      fontSize: 17,
    },

    viewTextoDois: {
      marginLeft: wp('21%'),
    },    

    viewRodape: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: hp('3.3%'),
    },

    imagemRodape: {
      width: 410,
      height: 105,
      resizeMode: 'stretch',
    },
    
};

export const loginRedesStyles = {

    viewMaior:{
      flex: 1,
      flexDirection: 'column',

    },

    viewLogo:{
      marginLeft: wp('20%'),
      marginTop: hp('10%'),
    },

    imagemLogo:{
      width: 260,
      height: 210,
    },

    viewTexto:{
      marginLeft: wp('21%'),
      marginTop: hp('8%'),
    },

    mensagemTexto:{
      color: 'gray',
      fontWeight: 'bold',
      fontSize: 15,
    },

    viewBotaoFace:{
      marginLeft: wp('17%'),
      marginTop: hp('4%'),
    },

    imagemBotao:{
      width: 285,
      height: 50,
    },

    viewBotaoGmail:{
      marginLeft: wp('17%'),
      marginTop: hp('2%'),
    },   

    viewBotaoEmail:{
      marginLeft: wp('17%'),
      marginTop: hp('2%'),
    },    

    viewSelo:{
      marginLeft: wp('44%'),
      marginTop: hp('10%'),
    },

    imagemSelo:{
      width: 60,
      height: 60,
    }

};

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


export const menuIniciarStyles = {


};

export const profileStyles = {

    viewMaior:{
      flex: 1
    },

    viewBarra:{
      marginLeft: wp('85%'),
      marginTop: hp('4%'),
      position: 'absolute',
    },

    imagemBarra:{
      width: 35,
      height: 30,
      resizeMode: 'cover',
    },

    viewSeta:{
      marginLeft: wp('2.5%'),
      marginTop: hp('5%'),
      position: 'absolute',
    },

    imagemSeta:{
      width: 13,
      height: 18,
    },

    viewLogo:{
      marginLeft: wp('10%'),
      marginTop: hp('4.8%'),
      position: 'absolute',
    },

    imagemLogo:{
      width: 140,
      height: 21,      
    },

    viewLinha:{
      marginTop: hp('11%'),
      marginLeft: wp('3%'),
      position: 'absolute',
    },

    imagemLinha:{
      width: 390,
      height: 1,    
    },

    viewColuna:{
      flex: 1,
      flexDirection: 'column',
    },

    viewMascara:{
      marginLeft: wp('38%'),
      marginTop: hp('15%'),
    },

    imagemMascara:{
      width: 110,
      height: 127,
    },

    textoMascara:{
      fontSize: 90,
      color: 'white',
      marginLeft: wp('5.5%'),
      position: 'absolute',
    },

    viewTexto:{
      alignItems: 'center',
    },

    textoNome:{
      fontSize: 20,
      color: 'white',
      marginTop: hp('2%'),
      marginLeft: wp('5%'),
      fontWeight: 'bold',
    },

    textoCpf:{
      fontSize: 20,
      color: 'gray',
      fontWeight: 'bold',
      marginLeft: wp('4%'),
    },

    viewChavePublica:{
      marginLeft: wp('15%'),
      marginTop: hp('5%'),
    },

    imagemBotoes:{
      width: 300,
      height: 60,
    },

    textoChavePublica:{
      marginLeft: wp('19%'),
      marginTop: hp('2.5%'),
      fontSize: 18,
      color: 'black',
      position: 'absolute',
    },

    viewChavePrivada:{
      marginLeft: wp('15%'),
      marginTop: hp('4%'),
    },
   

    textoChavePrivada:{
      marginLeft: wp('19%'),
      marginTop: hp('2.5%'),
      fontSize: 18,
      color: 'white',
      position: 'absolute',
    },

    viewSwitch:{
      marginLeft: wp('25%'),
      marginTop: hp('4%'),
      flexDirection: 'row',
    },

    chaveSwtich:{
      transform: [{scaleX: 2}, {scaleY: 2}],
      position: 'absolute',
    },
  
    textoSwitch:{
      fontSize: 18,
      color: 'gray',
      marginLeft: wp('17%'),
    },

    viewSair:{
      marginLeft: wp('15%'),
      marginTop: hp('9%'),
    },
    
};
