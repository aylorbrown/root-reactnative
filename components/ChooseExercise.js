import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Button
} from 'react-native';


export default function ChooseExercise() {
    return (
    <SafeAreaView style={styles.container}>
      <View>
        
        <Text style={styles.text}>Choose an Exercise</Text>

        <Button 
            color='#1c1aa9'
            title='KEGEL'
        />

        <Button 
            color='#1c1aa9'
            title='DEEP SQUAT'
        />
        
      </View>
      </SafeAreaView>
    );
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
    }
  });