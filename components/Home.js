// import progress chart here 
import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    TouchableHighlight,
    Text } from "react-native";
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

import ProgressChart from '../components/ProgressChart';


    export default class Home extends Component {
        constructor(props) {
            super(props);
            this.state = {
                redirect: false
            }
        }

        render() {

            return(
                <View style={styles.container}>
                    {this.state.redirect && <Redirect to='/ChooseExercise' />}

                    <ProgressChart />
                
    
                <TouchableHighlight
                style={styles.button}
                onPress={() => {
                    this.setState({
                        redirect: true
                    })
                }}
                >
                    <Text style={styles.buttonText}>START</Text>
                </TouchableHighlight>
                </View>
            )
        }
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