import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    View, 
    StyleSheet, 
    Image,
    TouchableWithoutFeedback, 
    TouchableHighlight,
    TouchableOpacity, 
    Vibration
} from 'react-native';
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

import PauseImage from '../assets/pause.png';
import StartImage from '../assets/start.png';
import NextImage from '../assets/next.png'

import StartCircle from './StartCircle';

import UserContext from './UserContext';


const DURATION = 1000;

const BellyBreathTimer = ()  => {
    const MAXSECONDS = 4;
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(8);
    const [activity, setActivity] = useState('inhale');
    const [redirect, setRedirect] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectGuideBreath, setRedirectGuideBreath] = useState(false);
    const {
        breathData,
        setBreathData, 
        saveData
        } = useContext(UserContext);

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
      let interval = null;
      let littleTimer = null;

      let countDown = () => {
          if (seconds ==1){
              Vibration.vibrate(DURATION);
              if (reps ==0) {
                  Vibration.cancel();
                // to get day of week 
                var d = new Date();
                var n = d.getDay() -1;
                  let tempValue = [...breathData];
                  let currentDay = tempValue[n];
                  currentDay.minutes += Math.round((100/60) * 100) / 100
                saveData(tempValue);
                setRedirect(true);
                  setBreathData(tempValue);
              } else {
                  setSeconds(MAXSECONDS);
                  setNumberReps(reps => reps - 1);
                  if (activity == 'exhale') {
                      setActivity('inhale');
                    } else {
                        setActivity('exhale');
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

        <View style={styles.container}>
            {redirect && <Redirect to='/Home' />}
            {redirectHome && <Redirect to='/Home' />}
            {redirectGuideBreath && <Redirect to='/GuideBellyBreath' />}



            <View style={styles.paragraph}>

                <View style={styles.headerNav}>
                    {/*  work on this accessibility */}
                    <TouchableOpacity
                    style={styles.home}
                    onPress={() => {
                        setRedirectHome({
                            redirectHome
                        })
                    }}
                    >
                        <Text style={styles.homeText}>
                            HOME
                        </Text>
                    </TouchableOpacity>
                   

                    <Text style={styles.title}>
                        BREATH
                    </Text>

                    
                    <TouchableOpacity
                    style={styles.guideLink}
                    onPress={() => {
                        setRedirectGuideBreath({
                            redirectGuideBreath
                        })
                    }}
                    >
                    <Text style={styles.guideText}>
                        GUIDE
                    </Text>
                    </TouchableOpacity>
                    
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
                    style={styles.icon}
                    onPress={toggle}>
                        <Image 
                        source={isActive ? PauseImage : StartImage}
                        />
                    </TouchableWithoutFeedback>

                    <TouchableHighlight
                    style={styles.icon}
                    onPress={() => {
                        setRedirect({
                            redirect
                        })
                    }}>
                        <Image 
                        source={NextImage}
                        />
                    </TouchableHighlight>
                    </View>
            </View>
            </View>
    );
}


const styles= StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fefffe',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 8,
        paddingTop: Constants.statusBarHeight,
        width: '100%'
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
        bottom: 140,
        right: 65
      },

    homeText: {
        // fontFamily: 'SuezOne-regular',
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
    },

    title: {
        // fontFamily: 'SuezOne-regular',
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',

        bottom: 140
      },

    guideLink: {
        bottom: 140,
        left: 65,
    },

    guideText: {
        // fontFamily: 'SuezOne-regular',
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
    },

    textSeconds: {
        fontFamily: 'Gopher-regular',
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',

        left: 85, 
        top: 75,
      }, 
    
    text: {
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
    },

    icons: {
        flexDirection: 'row',
        top: 140,
      },

    icon: {
        paddingStart: 40,
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
export default BellyBreathTimer;

