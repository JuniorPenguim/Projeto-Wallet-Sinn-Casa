import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginTop: hp('4%'),
    width: 65,
    height: 65,
  },

  viewLogo: {
    flex: 2,
    alignItems: 'center',
  },

  imagemLogo: {
    marginTop: hp('15%'),
    width: 300,
    height: 50,
  },

  imagemIcone: {
    marginTop: hp('3%'),
    width: 250,
    height: 150,
  },

  viewTextos: {
    flex: 0.5,
    alignItems: 'center',
  },

  textoUm: {
    marginTop: hp('5%'),
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  textoDois: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  viewRodape: {
    flex: 1,
    justifyContent: 'space-evenly',
    //justifyContent: 'flex-end',
    alignItems: 'center',
  },

  imagemRodape: {
    width: 410,
    height: 105,
  },
};

export const loginRedesStyles = {
  viewMaior: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  viewLogo: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    width: 260,
    height: 210,
    // width: '70%',
    // height: '70%',
  },

  viewTexto: {
    flex: 0.2,
    alignItems: 'center',
  },

  mensagemTexto: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
  },

  viewBotao: {
    flex: 1,
    alignItems: 'center',
  },

  imagemBotao: {
    width: 285,
    height: 50,
  },

  imagemBotaoDois: {
    marginTop: hp('2%'),
    width: 285,
    height: 50,
  },

  imagemBotaoTres: {
    marginTop: hp('2%'),
    width: 285,
    height: 50,
  },

  viewSelo: {
    flex: 0.5,
    alignItems: 'center',
  },

  imagemSelo: {
    width: 60,
    height: 60,
  },
};

export const loginStyles = {
  viewMaior: {
    flex: 1,
  },

  viewLogoIcone: {
    marginLeft: '20%',
    marginTop: '20%',
    position: 'absolute',
  },

  imagemLogoIcone: {
    width: 255,
    height: 210,
  },

  viewTextoUm: {
    marginLeft: '30%',
    marginTop: '79%',
    position: 'absolute',
  },

  mensagemTextos: {
    color: 'gray',
    fontWeight: 'bold',
  },

  viewTextoDois: {
    marginLeft: '19%',
    marginTop: '83%',
    position: 'absolute',
  },

  viewBotaoBUm: {
    marginLeft: '14%',
    marginTop: '95%',
    position: 'absolute',
  },

  imagemBotoesB: {
    width: wp('73%'),
    height: hp('6.5%'),
  },

  viewIconeUm: {
    marginLeft: '19%',
    marginTop: '98.5%',
    position: 'absolute',
  },

  imagemIconeUm: {
    width: 20,
    height: 23,
  },

  viewBotaoBDois: {
    marginLeft: '14%',
    marginTop: '113%',
    position: 'absolute',
  },

  viewIconeDois: {
    marginLeft: '20%',
    marginTop: '117.5%',
    position: 'absolute',
  },

  imagemIconeDois: {
    width: wp('3.5%'),
    height: hp('2%'),
  },

  viewBotaoEntrar: {
    marginLeft: '8%',
    marginTop: '131%',
    position: 'absolute',
  },

  botaoEntrar: {
    marginLeft: '10%',
    marginRight: '8%',
    marginTop: '1%',
    marginBottom: '15%',
  },

  botaoEntrarStyle: {
    backgroundColor: '#9d9d9d',
    width: '120%',
    height: '110%',
    borderRadius: 25,
  },

  viewSelo: {
    marginLeft: wp('43%'),
    marginRight: wp('15%'),
    marginTop: hp('87%'),
    position: 'absolute',
  },

  imagemSelo: {
    width: 60,
    height: 60,
  },
};

export const menuIniciarStyles = {
  viewMaior: {
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
    width: 140,
    height: 21,
  },

  viewMenu: {
    marginLeft: wp('40%'),
    marginTop: hp('4%'),
  },

  imagemMenu: {
    width: 35,
    height: 30,
  },

  viewLinha: {
    marginTop: hp('3%'),
    marginLeft: wp('3%'),
  },

  imagemLinha: {
    width: 390,
    height: 1,
  },

  viewApresentacao: {
    flexDirection: 'row',
  },

  imagemApresentacao: {
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    width: 220,
    height: 340,
  },

  imagemBotao: {
    marginLeft: wp('14%'),
    marginTop: hp('20%'),
    width: 300,
    height: 60,
  },

  viewTextos: {
    position: 'absolute',
  },

  textoUm: {
    marginTop: hp('18%'),
    marginLeft: wp('57%'),
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  textoDois: {
    textAlign: 'right',
    marginLeft: wp('57%'),
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  textoTres: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    marginTop: hp('2%'),
    marginLeft: wp('57%'),
    fontSize: 16,
    color: 'white',
  },

  textoTresUm: {
    fontWeight: 'bold',
    color: 'white',
  },

  textoBlocoDois: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },

  textoCincoUm: {
    fontWeight: 'bold',
    color: 'white',
  },

  textoDez: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },

  textoBlocoTres: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },

  textoQuatorze: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },

  textoQuinze: {
    marginTop: hp('0.1%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },

  textoDezesseis: {
    marginTop: hp('3%'),
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
  },
};

export const profileStyles = {
  viewMaior: {
    flex: 1,
  },

  viewBarra: {
    marginLeft: wp('85%'),
    marginTop: hp('4%'),
    position: 'absolute',
  },

  imagemBarra: {
    width: 35,
    height: 30,
    resizeMode: 'cover',
  },

  viewLogo: {
    marginLeft: wp('10%'),
    marginTop: hp('4.8%'),
    position: 'absolute',
  },

  imagemLogo: {
    width: 140,
    height: 21,
  },

  viewLinha: {
    marginTop: hp('11%'),
    marginLeft: wp('3%'),
    position: 'absolute',
  },

  imagemLinha: {
    width: 390,
    height: 1,
  },

  viewColuna: {
    flex: 1,
    flexDirection: 'column',
  },

  viewMascara: {
    marginTop: hp('15%'),
    alignItems: 'center',
  },

  imagemMascara: {
    width: 110,
    height: 127,
  },

  textoMascara: {
    fontSize: 90,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
  },

  viewTexto: {
    alignItems: 'center',
  },

  textoNome: {
    fontSize: 20,
    color: 'white',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textoCpf: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: wp('4%'),
    textAlign: 'center',
  },

  viewChavePublica: {
    marginLeft: wp('15%'),
    marginTop: hp('5%'),
  },

  imagemBotoes: {
    width: 300,
    height: 60,
  },

  textoChavePublica: {
    marginLeft: wp('19%'),
    marginTop: hp('2.5%'),
    fontSize: 18,
    color: 'black',
    position: 'absolute',
  },

  viewChavePrivada: {
    marginLeft: wp('15%'),
    marginTop: hp('4%'),
  },

  textoChavePrivada: {
    marginLeft: wp('19%'),
    marginTop: hp('2.5%'),
    fontSize: 18,
    color: 'white',
    position: 'absolute',
  },

  viewSwitch: {
    marginLeft: wp('25%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
  },

  chaveSwtich: {
    transform: [{scaleX: 2}, {scaleY: 2}],
    position: 'absolute',
  },

  textoSwitch: {
    fontSize: 18,
    color: 'gray',
    marginLeft: wp('17%'),
  },

  viewSair: {
    marginLeft: wp('15%'),
    marginTop: hp('9%'),
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
    marginTop: hp('3%'),
    marginRight: wp('6%'),
    width: 25,
    height: 25,
  },

  viewHead: {
    marginLeft: wp('6%'),
    marginTop: hp('3%'),
  },

  imagemMascara: {
    width: 60,
    height: 70,
  },

  textoMascara: {
    fontSize: 50,
    color: 'white',
    marginLeft: wp('3%'),
    position: 'absolute',
  },

  viewTextos: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: wp('13%'),
  },

  textoNome: {
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    fontSize: 17,
    color: 'white',
  },

  textoCpf: {
    marginLeft: wp('7%'),
    marginTop: hp('1%'),
    fontSize: 17,
    color: 'gray',
  },

  imagemLinha: {
    marginLeft: wp('5%'),
    marginTop: hp('4%'),
    width: 290,
    height: 1,
  },

  viewBody: {
    flexDirection: 'column',
  },

  viewCarteira: {
    marginLeft: wp('6%'),
    marginTop: hp('5%'),
    flexDirection: 'row',
  },

  imagemCarteira: {
    marginLeft: wp('1%'),
    width: 38,
    height: 28,
  },

  textoCarteira: {
    marginLeft: wp('5%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewConta: {
    marginLeft: wp('6%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
  },

  imagemConta: {
    marginLeft: wp('1.5%'),
    width: 32.88,
    height: 30,
  },

  textoConta: {
    marginLeft: wp('6%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewContratos: {
    flexDirection: 'row',
  },

  imagemContratos: {
    width: 28,
    height: 33,
    marginLeft: wp('8%'),
    marginTop: hp('3%'),
  },

  textoContratos: {
    marginLeft: wp('6.5%'),
    marginTop: hp('4%'),
    fontSize: 17,
    color: 'white',
  },

  viewColecionaveis: {
    flexDirection: 'row',
  },

  imagemColecionaveis: {
    width: 28,
    height: 28,
    marginLeft: wp('8%'),
    marginTop: hp('3%'),
  },

  textoColecionaveis: {
    marginLeft: wp('6.5%'),
    marginTop: hp('3.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewPolitica: {
    marginLeft: wp('5%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
  },

  imagemPolitica: {
    marginLeft: wp('3.5%'),
    width: 24.58,
    height: 31,
  },

  textoPolitica: {
    marginLeft: wp('7%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewTermo: {
    marginLeft: wp('5%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
  },

  imagemTermo: {
    marginLeft: wp('3%'),
    width: 32.88,
    height: 31.5,
  },

  textoTermo: {
    marginLeft: wp('6.2%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewSobre: {
    marginLeft: wp('5%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
  },

  imagemSobre: {
    marginLeft: wp('3%'),
    width: 33.84,
    height: 33.5,
  },

  textoSobre: {
    marginLeft: wp('6.5%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },

  viewSuporte: {
    marginLeft: wp('5%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
  },

  imagemSuporte: {
    marginLeft: wp('4%'),
    width: 29.37,
    height: 29,
  },

  textoSuporte: {
    marginLeft: wp('7%'),
    marginTop: hp('0.5%'),
    fontSize: 17,
    color: 'white',
  },
};
