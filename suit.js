import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';

export default class Suit extends Component{
    render(){
        return(            
        <View style={cartaStyle.frente}>           
            <Image 
            style={{ resizeMode: 'stretch',width: 72, height: 100}}
            source={require('./assets/Card_diamond.svg.png')}></Image>
        </View>        
        )
    }
}

const cartaStyle = StyleSheet.create({
    frente: {    
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',      
        borderRadius: 20,      
        flexDirection:"row",
       
      },
    number: {   
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 50,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      }
    }
)