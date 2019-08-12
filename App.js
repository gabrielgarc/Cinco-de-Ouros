import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './deck';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}></View>
      <View style={{flex:2}}>
       <Deck></Deck>
      </View>      
      <View style={{flex:1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex:1,  
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
