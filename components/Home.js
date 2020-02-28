// import progress chart here 
import React, { useContext } from 'react';
import { 
    StyleSheet, 
    View,
    TouchableHighlight,
    Text } from "react-native";
import Constants from 'expo-constants';

import ProgressChart from '../components/ProgressChart';


    export default function Home() {

        return(
            <View style={styles.container}>
                <ProgressChart />
            

            <TouchableHighlight
            style={styles.button}
            // onPress= go to ChooseExercise
            >
                <Text style={styles.buttonText}>START</Text>
            </TouchableHighlight>
            </View>
        )
    }

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            flexWrap: 'wrap',
            marginTop: Constants.statusBarHeight,
            backgroundColor: '#fc715e',
            alignItems: 'stretch',
            justifyContent: 'center',
          },

          button: {
            alignItems: 'center',
            backgroundColor: '#fc715e',
            padding: 10,
          },
        
          buttonText: {
            color: '#1c1aa9',
            fontWeight: '600',
            fontSize: 24
          }

    })