import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import * as styleClass from '../constants/StyleClass'
import { Button,Text,Avatar,Image} from 'react-native-elements';

// import { Container } from './styles';

export default class ProfileScreen extends Component {
  render() {
    return (

        <Container>
            <View style = {styleClass.profileStyles.avatarView}>
                <View style = {{alignItems:"center"}}>
                    <Avatar 
                        rounded 
                        title = "SW" 
                        size = "xlarge"
                    />
                    <Text h4 style = {{ marginTop: '5%' }}> Nome Sobrenome </Text>
                    <Text h4> 000.000.000-00 </Text>
                </View>
            </View>
            <View style = {{alignItems:'center',marginTop: '4%'}}>
                    <Button
                        title = 'Chave Publica'
                        //color = {constantClass.colors.blue}
                        //onPress={()=>this._idSignIn()}
                        
                        //containerStyle = {styleClass.loginStyles.enterButton}
                        buttonStyle = {{
                            //backgroundColor: constantClass.colors.enterBtnBlue,
                            borderRadius: 10  
                        }}
                    />
                </View>
                <View style = {{alignItems:'center',marginTop: '5%'}}>
                    <Button
                        title = 'Chave Privada'
                        //color = {constantClass.colors.blue}
                        //onPress={()=>this._idSignIn()}
                        
                        //containerStyle = {styleClass.loginStyles.enterButton}
                        buttonStyle = {{
                            //backgroundColor: constantClass.colors.enterBtnBlue,
                            borderRadius: 10  
                        }}
                    />
                </View>
                <View style = {{alignItems:'center',marginTop: '15%'}}>
                    <Button
                        title = 'Sair da conta'
                        //color = {constantClass.colors.blue}
                        //onPress={()=>this._idSignIn()}
                        
                        //containerStyle = {styleClass.loginStyles.enterButton}
                        buttonStyle = {{
                            //backgroundColor: constantClass.colors.enterBtnBlue,
                            borderRadius: 10  
                        }}
                    />
                </View>
        </Container>
    );
  }
}
