// import progress chart here 
import React, { Component, useContext } from 'react';
import { 
    StyleSheet, 
    View,
    TouchableHighlight,
    Text } from "react-native";
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

import ProgressChart from '../components/ProgressChart';
import UserContext from './UserContext';

// const {kegelData, squatData} = useContext(UserContext);


    export default class Home extends Component {
        constructor(props) {
            super(props);
            this.state = {
                redirect: false,
                guideRedirect: false
            }
        }

        render() {
            // console.log(kegelData)
            return(
                <View style={styles.container}>
                    {this.state.redirect && <Redirect to='/ChooseExercise' />}
                    {this.state.guideRedirect && <Redirect to='/GuidePelvic' />}


                    <View style={styles.headerNav}>

                        <Text style={styles.title}>
                            HOME
                        </Text>

                        <TouchableHighlight
                        style={styles.guideLink}
                        onPress={() => {
                            this.setState({
                                guideRedirect: true
                            })
                        }}>
                        <Text style={styles.guideText}>
                            GUIDE
                        </Text>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.chartContainer}>
                    <ProgressChart />
                    </View>
                
    
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

        headerNav: {
            flexDirection: 'row',
            bottom: 140,

        },

        title: {
            fontSize: 24, 
            color: '#1c1aa9',
            fontWeight: 'bold',
    
            left: 170
            
        },

        guideLink: {
            left: 240
        },

        guideText: {
            fontSize: 24, 
            color: '#1c1aa9',
            fontWeight: 'bold',
        },
    

        chartContainer: {
            top: 40
        },

        button: {
            alignItems: 'center',
            backgroundColor: '#fc715e',
            fontWeight: 'bold',

            padding: 10,
            top: 140,
          },
        
        buttonText: {
            color: '#1c1aa9',
            fontWeight: 'bold',
            fontSize: 24
          }

    })