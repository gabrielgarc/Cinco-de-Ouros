import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import Carta from './carta';

export default class Deck extends Component{
    
    state = {
        number: 0,
        suit: 'COSTAS',
        deck: [],
        deckBuilt: false,
        drawed: 0
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
          
          tmp = this.shuffleDeck(20, tmp);

          this.setState({
            deck: [...this.state.deck, ...tmp],
            deckBuilt: true
          });
        }
      }

      onPress = () => {
            
        var num = this.state.deck[this.state.drawed].number;
        var sui = this.state.deck[this.state.drawed].suit;


        this.setState({
          number: num,
          suit: sui,
          drawed: this.state.drawed + 1
        });
      }

      getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

      shuffleDeck(shuffleCnt, deckToShuffle) {
        for(var i = 0; i < shuffleCnt; i++) {
            var rndNo = this.getRandomInt(1, 52);
            var card = deckToShuffle[i];
            deckToShuffle[i] = deckToShuffle[rndNo];
            deckToShuffle[rndNo] = card;
        }

        return deckToShuffle;
      }


    render(){
        return(            
        <View style={{width: '60%', height: '100%'}} >
            <TouchableHighlight onPress={this.onPress} style={{width: '100%', height: '100%'}}>
            <Carta numero={this.state.number}  naipe={this.state.suit}></Carta>
            </TouchableHighlight>
            
        </View>     
        )
    }
}