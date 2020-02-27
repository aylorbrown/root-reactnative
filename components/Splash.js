import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import SpringCircle from './SpringCircle';


export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          ROOT
        </Text>
        
        <SpringCircle />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fc715e',
    padding: 8,
  },
  paragraph: {
    margin: 48,
    fontSize: 48,
    color: '#1c1aa9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});