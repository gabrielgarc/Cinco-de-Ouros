import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import Carta from './carta';

export default class Deck extends Component{
    
    state = {
        number: 0,
        suit: 'COSTAS',
        deck: [],
        deckBuilt: false
      }

      componentDidMount(){
        if(!this.state.deckBuilt){
          let tmp = [];
          for(let i = 1; i < 14; i++){
              tmp.push({number: i, suit: 'ouros'});
              tmp.push({number: i, suit: 'copas'});
              tmp.push({number: i, suit: 'paus'});
              tmp.push({number: i, suit: 'espadas'});
          }
          
          this.setState({
            deck: [...this.state.deck, ...tmp],
            deckBuilt: true
          });
        }
      }

      onPress = () => {

        var rand = Math.floor(Math.random() * this.state.deck.length - 1) + 1;
    
        var num = this.state.deck[rand].number;
        var sui = this.state.deck[rand].suit;
        this.setState({
          number: num,
          suit: sui
        });
        console.log('>>>>BUCETAO');
        var count = this.state.deck.filter(c => c.number == num && c.suit ==sui).length;
        console.log(count);
    
      }

    render(){
        return(            
        <View style={{width: '60%', height: '100%'}} >
            <TouchableHighlight onPress={this.onPress} style={{width: '100%', height: '100%'}}>
            <Carta numero={this.state.number}  ></Carta>
            </TouchableHighlight>
            
        </View>     
        )
    }
}