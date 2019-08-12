import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';

export default class Carta extends Component{
    render(){
        return(            
        <View style={cartaStyle.frente}>
            <Text style={cartaStyle.number}>5</Text> 
            <Image 
            style={{width: 72, height: 100, flex:1, resizeMode: 'stretch', alignContent: 'flex-start'}}
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
        width:'100%',
        height:'100%'
      },
    number: {   
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 260,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      }
    }
)
