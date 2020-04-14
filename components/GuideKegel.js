import React from 'react';
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


export default class GuideKegel extends React.Component {
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
                <Text style={styles.swipedText}>Swiped</Text>
              </Animated.Text>
            </RectButton>
          );
        };

        render() {

            return (
            <SafeAreaView style={styles.container}>
                {this.state.redirect && <Redirect to='/KegelFastTimer'/>}
                <ScrollView style={styles.scrollView}>
    
                <Text style={styles.text}>
                Before you can release and enhance the well-being of your pelvic floor, first you have to feel it and connect with it. 
    
                </Text>
                
                <Text style={styles.text}>
                Close your eyes and visualize the muscles at the base of your core, between your sitz bones, that you would use to cut your pee off midstream. Without using your butt or abs, contract your rosebud, pull it up into your body, and hold it. You should feel a tightening around your vagina. 
                </Text>
    
                <Text style={styles.text}>
                Contrast this move by letting go of the muscles, feeling space between your sitz bones, and allowing your rose to bloom. Feel the base of your core real, and then relax and expand a little more from there until you experience a complete surrender or holding. You will feel your belly relax, your shoulders melt, and your jaw and head release. 
                </Text>
    
                <Swipeable
                renderRightActions={this.renderRightActions}
                onSwipeableRightOpen={() => {
                    this.setState({
                        redirect:true
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
      backgroundColor: '#fc715e',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    scrollView: {
        marginHorizontal: 20,
    },

    text: {
        fontFamily: 'Gopher-regular',
        textAlign: 'justify',
        color: '#1c1aa9',
        fontWeight: '600',
        fontSize: 18,
        padding: 30,
    }, 

    swipedText: {
      color: '#fc715e'
    }
  });