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
                {this.state.redirect && <Redirect to='/BellyBreathTimer'/>}
                <ScrollView style={styles.scrollView}>

                <Text style={styles.paragraph}>
                BELLY BREATH
                </Text>
    
                <Text style={styles.text}>
                Also called diaphragmatic or abdominal breathing, belly breathing is a deep breathing technique that engages your diaphragm, a dome-shaped sheet of muscle at the bottom of your ribcage that is primary responsible for respiratory function. Belly breathing is central to the practice of meditation. We spend much of the day breathing with our chest, neck, and back, taking the time to breathe through our belly can be deeply relaxing. 
                </Text>
                
                <Text style={styles.text}>
                Begin by finding a comfortable seated position, really focusing on relaxing your shoulders and creating space in the back of the neck and spine.
                </Text>

                <Text style={styles.text}>
                Put one or two hands on the belly so you can feel the physical connection to the breath. Inhale through the nose and exhale through the mouth. 
                </Text>

                <Text style={styles.text}>
                On the inhale, expand the belly. Visualize the air moving into the belly cavity. Feel your lungs expand as the diaphragm moves down into your organs and pelvic floor, expanding the base of your core and releasing blocked energy and tension. 
                </Text>

                <Text style={styles.text}>
                On the exhale, feel the belly draw in towards the spine, the pelvic floor and diaphragm lift upward to close the ribs and flush and cleanse the lungs, bringing out the stagnant CO2.  
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
      backgroundColor: 'white',
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
      width: '87%',
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
      color: 'white'
    }
  });