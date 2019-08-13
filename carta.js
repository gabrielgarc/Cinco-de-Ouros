import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import Suit from './suit'

export default class Carta extends Component{
    render(){
        return(            
        <View style={cartaStyle.frente}>
            <Text style={cartaStyle.number}>{this.props.numero}</Text> 
            <Suit style={{flex: 1, }}></Suit>
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
        width:'100%',
        height:'100%'
      },
    number: {   
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 150,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      }
    }
)
