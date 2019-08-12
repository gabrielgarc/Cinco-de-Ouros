import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';

export default class Suit extends Component{
    render(){
        return(            
        <View style={cartaStyle.frente}>           
            <Image 
            style={{width: 72, height: 100, flex:1, resizeMode: 'stretch', alignContent: 'flex-start'}}
            source={require('./assets/Card_diamond.svg.png')}></Image>
        </View>        
        )
    }
}