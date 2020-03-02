import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button, 
    TouchableHighlight
} from 'react-native';
import { Redirect } from 'react-router-native';



export default class ChooseExercise extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    kegelsRedirect: false,
    squatRedirect: false
  }
}

  render() {
    return (
    <SafeAreaView style={styles.container}>
      {this.state.kegelsRedirect && <Redirect to='/GuideKegel' />}
      {this.state.squatRedirect && <Redirect to='/GuideSquat' />}


      <View>
        <Text style={styles.text}>Choose an Exercise</Text>

        <TouchableHighlight 
        style={styles.button}
        onPress={() => {
          this.setState({
            kegelsRedirect: true
          })
        }}
        >
          <Text style={styles.textButton}> KEGELS </Text>
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.button}
        onPress={() => {
          this.setState({
            squatRedirect: true
          })
        }}
        >
          <Text style={styles.textButton}> DEEP SQUAT </Text>
        </TouchableHighlight>

      </View>
      </SafeAreaView>
    );
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fc715e',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
        fontSize: 24,
        fontWeight: '900',
        color: '#1c1aa9',
    },

    text: {
        textAlign: 'center',
        color: '#1c1aa9',
        fontWeight: '900',
        fontSize: 48,
        padding: 40,
    }, 

    textButton: {
      textAlign: 'center',
      color: '#1c1aa9',
      fontWeight: '700',
      fontSize: 24, 

      padding: 20, 
    }
  });