import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import Carta from './carta';

export default class Deck extends Component{
    render(){
        return(            
        <View style={{width: '60%', height: '100%'}}>
            <Carta></Carta>
        </View>     
        )
    }
}