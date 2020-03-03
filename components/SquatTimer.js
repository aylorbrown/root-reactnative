import React, { useEffect, useState } from 'react';
import {
    Text,
    View, 
    StyleSheet, 
    Image,
    TouchableWithoutFeedback, 
    TouchableHighlight, 
    SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

import PauseImage from '../assets/pause.png';
import StartImage from '../assets/start.png';

import StartCircle from './StartCircle';



const SquatTimer = (
    {
    value,
    setValue, 
    saveData
    }
)  => {
    const MAXSECONDS = 5;
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(8);
    const [activity, setActivity] = useState('squat');
    const [redirect, setRedirect] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectGuideSquat, setRedirectGuideSquat] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
      let interval = null;
      let littleTimer = null;

      let countDown = () => {
          if (seconds ==1){
              if (reps ==0) {
                // to get day of week 
                var d = new Date();
                var n = d.getDay();//5
                //   let tempValue = [...value];
                //   let currentDay = tempValue[n];
                //   currentDay.minutes += 50/60
                // saveData(tempValue);
                setRedirect(true);
                // history.push("/slowtimer");
                //   setValue(
                //       value = tempValue
                //   )
              } else {
                  setSeconds(MAXSECONDS);
                  setNumberReps(reps => reps - 1);
                  if (activity == 'rest') {
                      setActivity('squat');
                    } else {
                        setActivity('rest');
                  }
              }
          } else {
            setSeconds(seconds => seconds - 1);
          }
      }
      if (isActive) {
          
        interval = setInterval(countDown, 1000);

        // 2nd set interval
          if (seconds == 0) {
            setSeconds(MAXSECONDS);
            countDown();
          }
      }
      return () => {
          clearInterval(interval); 
          clearInterval(littleTimer);
      }
    }, [isActive, seconds, reps, activity]);

    return (
        <SafeAreaView style={styles.container}>
            {redirect && <Redirect to='/Home' />}
            {redirectHome && <Redirect to='/Home' />}
            {redirectGuideSquat && <Redirect to='/GuideSquat' />}


            <View style={styles.paragraph}>

            <View style={styles.headerNav}>
                <TouchableHighlight
                    onPress={() => {
                        setRedirectHome({
                            redirectHome
                        })
                    }}
                    >
                        <Text style={styles.home}>
                            HOME
                        </Text>
                    </TouchableHighlight>


                    <Text style={styles.title}>
                        SQUAT
                    </Text>


                    <TouchableHighlight
                    onPress={() => {
                        setRedirectGuideSquat({
                            redirectGuideSquat
                        })
                    }}
                    >
                    <Text style={styles.guideLink}>
                        GUIDE
                    </Text>
                    </TouchableHighlight>
                </View>




                <Text 
                style={styles.text}>
                    {activity}
                </Text>
                
                <StartCircle
                    duration={5000}
                    shouldRun={isActive}
                >
                    
                <Text style={styles.textSeconds}>
                    {seconds}
                </Text>
                    
                </StartCircle>
    
                <Text style={styles.text}>
                    {reps} reps to go
                </Text>

                <View style={styles.icons}>
                    <TouchableWithoutFeedback
                    onPress={toggle}>
                        <Image 
                        source={isActive ? PauseImage : StartImage}
                        />
                    </TouchableWithoutFeedback>

                </View>

                
            </View>
            </SafeAreaView>
    );
}


const styles= StyleSheet.create({

    container: {
        flexGrow: 1,
        paddingTop: Constants.statusBarHeight,
        paddingStart: Constants.statusBarHeight,
        paddingEnd: Constants.statusBarHeight,
        backgroundColor: '#33c18b',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 8,
    },
    
    paragraph: {
        margin: 48,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },

    headerNav: {
        flexDirection: 'row',
    },

    home: {
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',

        bottom: 140,
        right: 65,
    },

    title: {
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',

        bottom: 140,
    },

    guideLink: {
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',

        bottom: 140,
        left: 65,
    },

    text: {
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
      },


    textSeconds: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',

        left: 85, 
        top: 70,
      }, 

    icons: {
        flexDirection: 'row',
        top: 140
    },


    circleTimerSqueeze: {
        height: 100,
        width: 100,
        borderRadius: 100/2,
        backgroundColor: '#1c1aa9',
        borderWidth: 1,
        borderColor: 'black',

        fontSize: 36,
        color: '#f8f8ff',
    }, 

    circleTimerRest: {
        height: 150,
        width: 150,
        borderRadius: 150/2,
        backgroundColor: '#1c1aa9',
        borderWidth: 1,
        borderColor: 'black',

        fontSize: 36,
        color: '#f8f8ff',
    },

    active: {
        backgroundColor: '#fc715e',
        borderWidth: 1,
        borderColor: '#fc715e',
      },
      
    inactive: {
        backgroundColor: '#fc715e',
        borderWidth: 1,
        borderColor: '#fc715e',
      }



})
export default SquatTimer;

