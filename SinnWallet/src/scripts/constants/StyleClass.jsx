import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Dimensions} from 'react-native';

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const splashStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewSelo: {
    flex: 0.5,
  },

  imagemSelo: {
    resizeMode: 'contain',
    marginTop: hp('4%'),
    width: wp('18%'),
    height: hp('10%'),
  },

  viewLogo: {
    flex: 2,
    alignItems: 'center',
  },

  imagemLogo: {
    resizeMode: 'contain',
    marginTop: hp('10%'),
    width: wp('75%'),
    height: hp('10%'),
  },

  imagemIcone: {
    marginTop: hp('3%'),
    width: wp('45%'),
    height: hp('25%'),
  },

  viewTextos: {
    flex: 0.5,
    alignItems: 'center',
  },

  textoUm: {
    marginTop: hp('5%'),
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
  },

  textoDois: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
  },

  viewRodape: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  imagemRodape: {
    resizeMode: 'contain',
    width: wp('100%'),
    height: wp('27%'),
  },
};

export const loginRedesStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  viewLogo: {
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    resizeMode: 'contain',
    width: wp('65%'),
    height: hp('65%'),
  },

  viewTexto: {
    flex: 0.2,
    alignItems: 'center',
  },

  mensagemTexto: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
  },

  viewBotao: {
    flex: 0.8,
    alignItems: 'center',
  },

  imagemBotao: {
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('7%'),
  },

  imagemBotaoDois: {
    marginTop: hp('2%'),
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('7%'),
  },

  imagemBotaoTres: {
    marginTop: hp('2%'),
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('7%'),
  },

  viewSelo: {
    flex: 0.4,
    alignItems: 'center',
  },

  imagemSelo: {
    resizeMode: 'contain',
    width: wp('18%'),
    height: hp('10%'),
  },
};

export const loginStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
  },

  viewLogoIcone: {
    flex: 1,
    marginTop: hp('10%'),
    alignItems: 'center',
  },

  imagemLogoIcone: {
    width: windowW * 0.71,
    height: windowH * 0.33,
  },

  mensagemTextoUm: {
    marginTop: hp('2%'),
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
  },

  mensagemTextoDois: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
  },

  viewBotoes: {
    flex: 1,
    alignItems: 'center',
  },

  searchSectionUm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('73%'),
    height: hp('7.5%'),
    borderRadius: 25,
  },

  searchSectionDois: {
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp('73%'),
    height: hp('7.5%'),
    borderRadius: 25
  },

  searchIcon: {
    padding: wp('10%'),
  },

  input: {
    textAlign: 'center',
    fontSize: 0.025 * windowH,
    paddingTop: hp('0.1%'),
    paddingLeft: wp('2%'),
    paddingBottom: hp('0.1%'),    
    backgroundColor: 'white',
    color: '#424242',
    height:hp('4%'),
    width: wp('50%'),
  },

  botaoContainer: {
    marginLeft: wp('10%'),
    marginRight: wp('8%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },

  botaoStyle: {
    backgroundColor: '#9d9d9d',
    width: wp('73%'),
    height: hp('8%'),
    borderRadius: 25,
  },

  imagemSelo: {
    width: wp('20.5%'),
    height: hp('11.5%'),
  },
};

export const menuIniciarStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
  },

  viewHeadM: {
    flex: 1,
    flexDirection: 'column',
  },

  viewHead: {
    flexDirection: 'row',
  },

  viewLogo: {
    marginLeft: wp('5%'),
    marginTop: hp('4.8%'),
  },

  imagemLogo: {
    marginTop: hp('5%'),
    marginLeft: wp('4%'),
    resizeMode: 'contain',
    width: 140,
    height: 21,
  },

  viewMenu: {
    marginLeft: wp('40%'),
    marginTop: hp('4%'),
  },

  imagemMenu: {
    resizeMode: 'contain',
    width: 35,
    height: 30,
  },

  imagemLinha: {
    marginTop: hp('3%'),
    resizeMode: 'contain',
    width: wp('100%'),
    height: 1,
  },

  viewApresentacao: {
    flex: 5,
    flexDirection: 'row',
  },

  imagemApresentacao: {
    resizeMode: 'contain',
    marginLeft: wp('5%'),
    width: wp('50%'),
    height: hp('50%'),
  },

  viewBotao: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },

  imagemBotao: {
    resizeMode: 'contain',
    marginTop: hp('20%'),
    width: wp('80%'),
    height: hp('10%'),
  },

  viewTextos: {
    position: 'absolute',
  },

  textoUm: {
    marginTop: hp('19%'),
    marginLeft: wp('60%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
    fontWeight: 'bold',
  },

  textoDois: {
    textAlign: 'right',
    marginLeft: wp('57%'),
    fontSize: 0.02 * windowH,
    color: 'white',
    fontWeight: 'bold',
  },

  textoTres: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    marginTop: hp('2%'),
    marginLeft: wp('57%'),
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoTresUm: {
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoBlocoDois: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoCincoUm: {
    fontWeight: 'bold',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoDez: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoBlocoTres: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoQuatorze: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoQuinze: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },

  textoDezesseis: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 0.02 * windowH,
    color: 'white',
  },
};

export const profileStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
  },

  viewHead: {
    flexDirection: 'row',
  },

  imagemLogo: {
    marginTop: hp('5%'),
    marginLeft: wp('4%'),
    resizeMode: 'contain',
    width: 140,
    height: 21,
  },

  viewMenu: {
    marginLeft: wp('40%'),
    marginTop: hp('4%'),
  },

  imagemMenu: {
    resizeMode: 'contain',
    width: 35,
    height: 30,
  },

  imagemLinha: {
    marginTop: hp('3%'),
    resizeMode: 'contain',
    width: wp('100%'),
    height: 1,
  },

  viewPerfil: {
    flex: 2,
    alignItems: 'center',
    justifyContent:'center',    
  },

  viewTextos: {    
    flex: 1.5,
    alignItems: 'center',
  },

  imagemMascara: {
    resizeMode: 'contain',
    width: wp('26%'),
    height: hp('26%'),
  },

  textoMascara: {    
    fontSize: 0.11 * windowH,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',    
  },

  textoNome: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 0.03 * windowH,
    textAlign: 'center',
    marginLeft: wp('10%'),
    marginRight: wp('10%'),
  },

  textoCpf: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 0.03 * windowH,
    textAlign: 'center',
  },

  viewBotoes: {
    
    flex: 3,
    alignItems: 'center',
  },

  imagemBotoes: {
    resizeMode: 'contain',
    width: wp('70%'),
    height: hp('10%'),
  },

  textoChavePublica: {
    marginLeft: wp('19%'),
    marginTop: hp('3.1%'),
    fontSize: 0.025 * windowH,
    color: 'black',
    position: 'absolute',
  },

  textoChavePrivada: {
    marginLeft: wp('19%'),
    marginTop: hp('13.5%'),
    fontSize: 0.025 * windowH,
    color: 'white',
    position: 'absolute',
  },

  viewSwitch: {
    flexDirection: 'row',
  },

  chaveSwtich: {
    marginTop: hp('5%'),
    transform: [{scaleX: 2}, {scaleY: 2}],
  },

  textoSwitch: {
    fontSize: 0.025 * windowH,
    marginTop: hp('5%'),
    marginLeft: wp('8%'),
    color: 'gray',
  },

  viewSair: {
    flex: 1,
    alignItems: 'center',
  },
};

export const menuInterno = {
  container: {
    backgroundColor: '#252525',
  },

  viewMaior: {
    flex: 1,
    flexDirection: 'column',
  },

  viewBotao: {
    alignItems: 'flex-end',
  },

  imagemBotao: {
    marginRight: wp('6%'),
    resizeMode: 'contain',
    width: wp('8%'),
    height: hp('8%'),
  },

  viewHead: {
    flex: 1,    
    flexDirection:'row',
    marginLeft:wp('4%')   
  },

  imagemMascara: {    
    width: wp('20%'),
    height: hp('20%'),
    resizeMode: 'contain',
  },

  textoMascara: {
    fontSize: 0.07 * windowH,
    color: 'white',       
    position: 'absolute',
  },

  viewTextos: {
    width: 0,
    flexGrow: 1,    
    flexDirection: 'column',    
    marginTop: hp('3.5%'),
  },

  textoNome: {    
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  textoCpf: {
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    fontSize: 0.023 * windowH,
    color: 'gray',
  },

  imagemLinha: {
    resizeMode: 'contain',
    width: wp('80%'),
    height: 1,
  },

  viewBody: {
    flex: 1,
    flexDirection: 'column',
  },

  viewCarteira: {
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
  },

  imagemCarteira: {
    marginLeft: wp('1%'),
    width: wp('10%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },

  textoCarteira: {
    marginLeft: wp('5%'),
    marginTop: hp('2.2%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewConta: {
    marginLeft: wp('4%'),
    flexDirection: 'row',
  },

  imagemConta: {
    marginLeft: wp('1.5%'),
    width: wp('10%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },

  textoConta: {
    marginLeft: wp('6%'),
    marginTop: hp('2.2%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewContratos: {
    flexDirection: 'row',
  },

  imagemContratos: {
    width: wp('7%'),
    height: hp('7%'),
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    resizeMode: 'contain',
  },

  textoContratos: {
    marginLeft: wp('8%'),
    marginTop: hp('3%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewColecionaveis: {
    flexDirection: 'row',
  },

  imagemColecionaveis: {
    width: wp('8%'),
    height: hp('8%'),
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    resizeMode: 'contain',
  },

  textoColecionaveis: {
    marginLeft: wp('7%'),
    marginTop: hp('3.5%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewPolitica: {
    flexDirection: 'row',
  },

  imagemPolitica: {
    marginLeft: wp('8%'),
    width: wp('6%'),
    height: hp('6%'),
    resizeMode: 'contain',
  },

  textoPolitica: {
    marginLeft: wp('8%'),
    marginTop: hp('1.5%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewTermo: {
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
    flexDirection: 'row',
  },

  imagemTermo: {
    marginLeft: wp('3%'),
    width: wp('8%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },

  textoTermo: {
    marginLeft: wp('7%'),
    marginTop: hp('2.5%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewSobre: {
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
    flexDirection: 'row',
  },

  imagemSobre: {
    marginLeft: wp('3%'),
    width: wp('8%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },

  textoSobre: {
    marginLeft: wp('7.5%'),
    marginTop: hp('2.2%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },

  viewSuporte: {
    marginLeft: wp('4%'),
    flexDirection: 'row',
  },

  imagemSuporte: {
    marginLeft: wp('4%'),
    width: wp('8%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },

  textoSuporte: {
    marginLeft: wp('6.5%'),
    marginTop: hp('2%'),
    fontSize: 0.023 * windowH,
    color: 'white',
  },
};
