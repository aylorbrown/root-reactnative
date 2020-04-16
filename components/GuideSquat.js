import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    ScrollView, 
    Animated
} from 'react-native';

import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

import SpringCircleGuide from './SpringCircleGuide';


export default class GuideSquat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        }
      }

      renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
        
        });
    
        return (
          <RectButton style={styles.leftAction} onPress={console.log('Pressed')}>
            <Animated.Text
              style={[
                styles.actionText,
                {
                  transform: [{ translateX: trans }],
                },
              ]}>
              <Text style={styles.textSwiped}>Swiped</Text>
            </Animated.Text>
          </RectButton>
        );
      };


        render() {

            return (
            <SafeAreaView style={styles.container}>
                {this.state.redirect && <Redirect to='/SquatTimer'/>}
                <ScrollView style={styles.scrollView}>
    
                <Text style={styles.paragraph}>
                DEEP SQUAT
                </Text>

                <Text style={styles.text}>
                Stand with your feet slightly wider than your hips, toes pointed slightly outward. Keep your spine in a neutral position - don't round you back, and don't over accentuate the natural arch of your back. Balance your weight on the heels and balls of your feet.  
                </Text>
                
                <Text style={styles.text}>
                With your hands in the prayer position and taking a deep breath, being sending your hips backwards as your knees begin to bend. Keep your back straight, and your chest and shoulders up. Be sure to keep your knees directly in line with your feet as you squat. Continue lowering your hips until they are slightly lower than your knees to perform a deep squat. Use your core to push yourself back up, keeping your weight in your heels. 
                </Text>

                <Swipeable
                renderRightActions={this.renderRightActions}
                onSwipeableRightOpen={() => {
                    this.setState({
                        redirect: true
                    })
                }}
                >
                <SpringCircleGuide />

                </Swipeable>
    
                </ScrollView>
    
            </SafeAreaView>
            );
        }
    }  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#33c18b',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    scrollView: {
        marginHorizontal: 20,
    },

    paragraph: {
      fontFamily: 'SuezOne-regular',
      margin: 24,
      fontSize: 42,
      width: '90%',
      color: '#1c1aa9',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    text: {
        fontFamily: 'Gopher-regular',
        textAlign: 'justify',
        color: '#1c1aa9',
        fontWeight: '600',
        fontSize: 18,
        padding: 30,
    }, 

    textSwiped: {
      color: '#33c18b'
    }
  });