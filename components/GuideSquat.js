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
import { render } from 'react-dom';


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
              Swiped
            </Animated.Text>
          </RectButton>
        );
      };


        render() {

            return (
            <SafeAreaView style={styles.container}>
                {this.state.redirect && <Redirect to='/SquatTimer'/>}
                <ScrollView style={styles.scrollView}>
    
                <Text style={styles.text}>
                The pelvic floor is a group of muscles that attaches to the bones at the bottom of your pelvis. These muscles effectively form a hammock across the base of your pelvis that supports the internal organs above it. Having strong pelvic floor muscles give you proper control over our bladder and bowels, improve sexual performance and orgasm, help stabilize the hip joints, and act as a lymphatic pump for the pelvis. 
                </Text>
                
                <Text style={styles.text}>
                In Eastern traditions, the pelvic floor is known as the root chakra - it's where we tend to literally "hold" fears, specifically fears around primary instincts such as our health, our family's safety, and our financial security. It is a "stress container," in that it's where we process the emotion and house our fight or flight reactions. 
                </Text>
    
                <Text style={styles.text}>
                When we lose the connection to those deep muscles, it becomes difficult to relax the area, meaning the pelvic floor becomes perma-flexed. Imagine flexing your bicep constantly and never fully letting go and you get the idea: After a while, this would cause your arm to lose flexibility, strength, and the ability to relax. That's more or less what happens to the pelvic floor until you become aware of the stress and tension and do some work to alleviate it. Part of this is willfully relaxing and unclenching these muscles - and then directing energy to build strength. 
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

    text: {
        textAlign: 'justify',
        color: '#1c1aa9',
        fontWeight: '600',
        fontSize: 18,
        padding: 30,
    }
  });