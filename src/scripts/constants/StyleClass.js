import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Dimensions } from 'react-native'

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export const splashStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewSelo: {
        flex: 0.5
    },

    imagemSelo: {
        resizeMode: 'contain',
        marginTop: hp('4%'),
        width: wp('18%'),
        height: hp('10%')
    },

    viewLogo: {
        flex: 2,
        alignItems: 'center'
    },

    imagemLogo: {
        resizeMode: 'contain',
        marginTop: hp('10%'),
        width: wp('75%'),
        height: hp('10%')
    },

    imagemIcone: {
        marginTop: hp('3%'),
        width: wp('45%'),
        height: hp('25%')
    },

    viewTextos: {
        flex: 0.5,
        alignItems: 'center'
    },

    textoUm: {
        marginTop: hp('5%'),
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 0.02 * windowH
    },

    textoDois: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 0.02 * windowH
    },

    viewRodape: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    imagemRodape: {
        resizeMode: 'contain',
        width: wp('100%'),
        height: wp('27%')
    }
}

export const loginRedesStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    viewLogo: {
        flex: 1.4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imagemLogo: {
        resizeMode: 'contain',
        width: wp('65%'),
        height: hp('65%')
    },

    viewTexto: {
        flex: 0.2,
        alignItems: 'center'
    },

    mensagemTexto: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 0.02 * windowH
    },

    viewBotao: {
        flex: 0.8
    },

    imagemBotao: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: wp('70%'),
        height: hp('7%')
    },

    textoFacebook: {
        marginTop: hp('2%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'white',
        fontSize: 0.024 * windowH
    },

    imagemBotaoDois: {
        marginTop: hp('2%'),
        resizeMode: 'contain',
        alignSelf: 'center',
        width: wp('70%'),
        height: hp('7%')
    },

    textoGmail: {
        marginTop: hp('10.6%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'red',
        fontSize: 0.024 * windowH
    },

    imagemBotaoTres: {
        marginTop: hp('2%'),
        resizeMode: 'contain',
        alignSelf: 'center',
        width: wp('70%'),
        height: hp('7%')
    },

    textoEmail: {
        marginTop: hp('3.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'white',
        fontSize: 0.024 * windowH
    },

    viewSelo: {
        flex: 0.4,
        alignItems: 'center'
    },

    imagemSelo: {
        resizeMode: 'contain',
        width: wp('18%'),
        height: hp('10%')
    }
}

export const loginStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewLogoIcone: {
        flex: 1,
        marginTop: hp('10%'),
        alignItems: 'center'
    },

    imagemLogoIcone: {
        marginTop: hp('10%'),
        width: wp('71%'),
        height: hp('33%')
    },

    mensagemTextoUm: {
        marginTop: hp('2%'),
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 0.02 * windowH
    },

    mensagemTextoDois: {
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 0.02 * windowH
    },

    viewBotoes: {
        flex: 1,
        alignItems: 'center'
    },

    searchSectionUm: {
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: wp('73%'),
        height: hp('7.5%'),
        borderRadius: 25
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
        padding: wp('10%')
    },

    input: {
        fontSize: 0.025 * windowH,
        paddingTop: hp('0.1%'),
        paddingLeft: wp('2%'),
        paddingBottom: hp('0.1%'),
        backgroundColor: 'white',
        color: '#424242',
        height: hp('4%'),
        width: wp('50%')
    },

    botaoContainer: {
        marginLeft: wp('10%'),
        marginRight: wp('8%'),
        marginTop: hp('3%'),
        marginBottom: hp('3%')
    },

    botaoStyle: {
        backgroundColor: '#9d9d9d',
        width: wp('73%'),
        height: hp('8%'),
        borderRadius: 25
    },

    imagemSelo: {
        width: wp('20.5%'),
        height: hp('11.5%')
    }
}

export const menuIniciarStyles = {
    viewMaior: {
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    viewApresentacao: {
        flexDirection: 'row'
    },

    imagemApresentacao: {
        resizeMode: 'stretch',
        marginTop: hp('1%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        width: wp('85%'),
        height: hp('65%')
    },

    viewBotao: {
        backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    imagemBotao: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: hp('4%'),
        width: wp('80%'),
        height: hp('10%')
    },

    textoBotao: {
        marginTop: hp('7.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'white',
        fontSize: 0.024 * windowH,
        alignSelf: 'center'
    }
}

export const profileStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    viewPerfil: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewTextos: {
        flex: 1.5,
        alignItems: 'center'
    },

    imagemMascara: {
        resizeMode: 'contain',
        width: wp('26%'),
        height: hp('26%')
    },

    textoMascara: {
        fontSize: 0.11 * windowH,
        color: 'white',
        position: 'absolute',
        textAlign: 'center'
    },

    textoNome: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 0.03 * windowH,
        textAlign: 'center',
        marginLeft: wp('10%'),
        marginRight: wp('10%')
    },

    textoCpf: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 0.03 * windowH,
        textAlign: 'center'
    },

    viewBotoes: {
        flex: 3,
        alignItems: 'center'
    },

    imagemBotoes: {
        resizeMode: 'contain',
        width: wp('70%'),
        height: hp('10%')
    },

    textoChavePublica: {
        marginLeft: wp('19%'),
        marginTop: hp('3.1%'),
        fontSize: 0.025 * windowH,
        color: 'black',
        position: 'absolute'
    },

    textoChavePrivada: {
        marginLeft: wp('19%'),
        marginTop: hp('13.5%'),
        fontSize: 0.025 * windowH,
        color: 'white',
        position: 'absolute'
    },

    viewSwitch: {
        flexDirection: 'row'
    },

    chaveSwtich: {
        marginTop: hp('5%'),
        transform: [{ scaleX: 2 }, { scaleY: 2 }]
    },

    textoSwitch: {
        fontSize: 0.025 * windowH,
        marginTop: hp('5%'),
        marginLeft: wp('8%'),
        color: 'gray'
    },

    viewSair: {
        flex: 1,
        alignItems: 'center'
    },

    textoSair: {
        marginTop: hp('3.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'white',
        fontSize: 0.024 * windowH,
        alignSelf: 'center'
    }
}

export const menuInterno = {
    container: {
        backgroundColor: '#252525'
    },

    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewBotao: {
        alignItems: 'flex-end'
    },

    imagemBotao: {
        marginRight: wp('6%'),
        resizeMode: 'contain',
        width: wp('8%'),
        height: hp('8%')
    },

    viewHead: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: wp('4%')
    },

    imagemMascara: {
        width: wp('20%'),
        height: hp('20%'),
        resizeMode: 'contain'
    },

    textoMascara: {
        fontSize: 0.07 * windowH,
        color: 'white',
        position: 'absolute'
    },

    viewTextos: {
        width: 0,
        flexGrow: 1,
        flexDirection: 'column',
        marginTop: hp('3.5%')
    },

    textoNome: {
        marginLeft: wp('7%'),
        marginTop: hp('1%'),
        marginRight: wp('2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    textoCpf: {
        marginLeft: wp('7%'),
        marginTop: hp('1%'),
        fontSize: 0.023 * windowH,
        color: 'gray'
    },

    imagemLinha: {
        resizeMode: 'contain',
        width: wp('80%'),
        height: 1
    },

    viewBody: {
        flex: 1,
        flexDirection: 'column'
    },

    viewCarteira: {
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
        flexDirection: 'row'
    },

    imagemCarteira: {
        marginLeft: wp('1%'),
        width: wp('10%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoCarteira: {
        marginLeft: wp('5%'),
        marginTop: hp('2.2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewConta: {
        marginLeft: wp('4%'),
        flexDirection: 'row'
    },

    imagemConta: {
        marginLeft: wp('1.5%'),
        width: wp('10%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoConta: {
        marginLeft: wp('6%'),
        marginTop: hp('2.2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewContratos: {
        flexDirection: 'row'
    },

    imagemContratos: {
        width: wp('7%'),
        height: hp('7%'),
        marginLeft: wp('7%'),
        marginTop: hp('1%'),
        resizeMode: 'contain'
    },

    textoContratos: {
        marginLeft: wp('8%'),
        marginTop: hp('3%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewColecionaveis: {
        flexDirection: 'row'
    },

    imagemColecionaveis: {
        width: wp('8%'),
        height: hp('8%'),
        marginLeft: wp('7%'),
        marginTop: hp('1%'),
        resizeMode: 'contain'
    },

    textoColecionaveis: {
        marginLeft: wp('7%'),
        marginTop: hp('3.5%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewPolitica: {
        flexDirection: 'row'
    },

    imagemPolitica: {
        marginTop:hp('1%'),
        marginLeft: wp('8%'),
        width: wp('6%'),
        height: hp('6%'),
        resizeMode: 'contain'
    },

    textoPolitica: {
        marginLeft: wp('8.5%'),
        marginTop: hp('2.5%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewTermo: {
        marginLeft: wp('4%'),
        marginTop: hp('1%'),
        flexDirection: 'row'
    },

    imagemTermo: {
        marginLeft: wp('3%'),
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoTermo: {
        marginLeft: wp('7.5%'),
        marginTop: hp('2.5%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewSobre: {
        marginLeft: wp('4%'),
        //marginTop: hp('1%'),
        flexDirection: 'row'
    },

    imagemSobre: {
        marginLeft: wp('3%'),
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoSobre: {
        marginLeft: wp('8%'),
        marginTop: hp('2.2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewSuporte: {
        marginLeft: wp('4%'),
        flexDirection: 'row'
    },

    imagemSuporte: {
        marginLeft: wp('4%'),
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoSuporte: {
        marginLeft: wp('7%'),
        marginTop: hp('2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewAutenticacao: {
        marginLeft: wp('3%'),
        flexDirection: 'row'
    },

    imagemAutenticacao: {
        marginLeft: wp('4%'),
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },

    textoAutenticacao: {
        marginLeft: wp('7%'),
        marginTop: hp('2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },

    viewConfiguracoes: {
        flexDirection: 'row',
        
    },

    imagemConfiguracoes: {
        width: wp('7%'),
        height: hp('7%'),
        marginLeft: wp('7%'),
        //marginTop: hp('1%'),
        resizeMode: 'contain'
    },

    textoConfigurações: {
        marginLeft: wp('8%'),
        marginTop: hp('2%'),
        fontSize: 0.023 * windowH,
        color: 'white'
    },
}

export const carteiraStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemSeta: {
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        width: wp('5%'),
        height: hp('5%')
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    textoCarteira: {
        fontSize: 0.03 * windowH,
        color: 'gray',
        marginLeft: wp('6%'),
        marginTop: hp('2%')
    },

    viewDocumentos: {
        flex: 2.8
    },

    viewBottom: {
        flex: 1.1,
        justifyContent: 'flex-start'
    },

    textoBottom: {
        textAlign: 'left',
        fontSize: 0.03 * windowH,
        color: 'white',
        marginLeft: wp('6%'),
        marginRight: wp('8%'),
        marginTop: hp('2%')
    },

    textoBottomUm: {
        fontWeight: 'bold'
    },

    imagemDocumento: {
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: hp('2%'),
        width: wp('70%'),
        height: hp('10%')
    },

    textoDocumento: {
        marginTop: hp('5.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'black',
        fontSize: 0.024 * windowH,
        alignSelf: 'center'
    }
}

export const capturaStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemSeta: {
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        width: wp('5%'),
        height: hp('5%')
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    textoUm: {
        marginLeft: wp('3%'),
        fontSize: 0.03 * windowH,
        color: 'gray'
    },

    viewCamera: {
        marginTop: hp('1%'),
        width: wp('100%'),
        height: hp('70%'),
        overflow: 'hidden'
    },

    imagemMascara: {
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
        width: wp('95%'),
        height: hp('70%')
    },

    viewCaptura: {
        alignItems: 'center'
    },

    imagemCaptura: {
        resizeMode: 'contain',
        width: wp('70%'),
        height: hp('10%')
    },

    estiloCaptura: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },

    textoCaptura: {
        marginTop: hp('3.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'black',
        fontSize: 0.024 * windowH,
        alignSelf: 'center'
    }
}

export const qrStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemSeta: {
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        width: wp('5%'),
        height: hp('5%')
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    textoUm: {
        fontSize: 0.03 * windowH,
        color: 'gray',
        marginLeft: wp('4%')
    },

    textoDois: {
        marginTop: hp('1%'),
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    textoDoisUm: {
        fontSize: 0.025 * windowH,
        fontWeight: 'bold'
    },

    textoTres: {
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    textoQuatro: {
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    viewQr: {
        width: wp('100%'),
        height: hp('55%'),
        overflow: 'hidden'
    },

    imagemBotao: {
        resizeMode: 'contain',
        width: wp('70%'),
        height: hp('10%')
    },

    textoBotao: {
        marginTop: hp('3.5%'),
        marginLeft: wp('30%'),
        position: 'absolute',
        color: 'black',
        fontSize: 0.024 * windowH,
        alignSelf: 'center'
    }
}

export const politicaStyles = {
    viewMaior: {
        flex: 1,
        flexDirection: 'column'
    },

    viewHead: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        flexDirection: 'row'
    },

    imagemSeta: {
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        width: wp('5%'),
        height: hp('5%')
    },

    imagemLogo: {
        marginLeft: wp('4%'),
        resizeMode: 'contain',
        width: wp('50%'),
        height: wp('30%')
    },

    viewMenu: {
        flex: 1,
        marginRight: wp('4%'),
        alignItems: 'flex-end'
    },

    imagemMenu: {
        resizeMode: 'contain',
        width: wp('9%'),
        height: hp('9%')
    },

    imagemLinha: {
        marginTop: hp('-3%'),
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('1%')
    },

    textoUm: {
        fontSize: 0.03 * windowH,
        color: 'gray',
        marginLeft: wp('4%')
    },

    textoDois: {
        marginTop: hp('1%'),
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    textoDoisUm: {
        fontSize: 0.025 * windowH,
        fontWeight: 'bold'
    },

    textoTres: {
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    textoQuatro: {
        marginLeft: wp('4%'),
        fontSize: 0.025 * windowH,
        color: 'white'
    },

    viewQr: {
        width: wp('100%'),
        height: hp('68%'),
        overflow: 'hidden'
    }
}
