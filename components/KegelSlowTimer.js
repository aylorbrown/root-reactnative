import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    View, 
    StyleSheet, 
    Image,
    TouchableWithoutFeedback, 
    TouchableHighlight, 
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

const SlowTimer = ()  => {
    const MAXSECONDS = 1;
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(5);
    const [activity, setActivity] = useState('squeeze');
    const [redirect, setRedirect] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectGuideKegel, setRedirectGuideKegel] = useState(false);
    const {
        kegelData,
        setKegelData, 
        saveData
     } = useContext(UserContext);

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
      let interval = null;
      let littleTimer = null;


      let countDown = () => {
          if (seconds ==0){
            Vibration.vibrate(DURATION);
              if (reps ==0) {
                Vibration.cancel();
                // to get day of week 
                var d = new Date();
                var n = d.getDay() -1;
                //   let tempValue = [...value];
                let tempValue = [...kegelData];
                  let currentDay = tempValue[n];
                  currentDay.minutes += Math.round((25/60) * 100) / 100
                //   console.log(currentDay);
                saveData(tempValue);
                setRedirect(true);
                setKegelData(tempValue);

              } else {
                  setSeconds(MAXSECONDS);
                  setNumberReps(reps => reps - 1);
                  if (activity == 'rest') {
                      setActivity('squeeze');
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

        <View style={styles.container}>
            {redirect && <Redirect to='/Home' />}
            {redirectHome && <Redirect to='/Home' />}
            {redirectGuideKegel && <Redirect to='/GuideKegel' />}


            <View style={styles.paragraph}>

                <View style={styles.headerNav}>
                <TouchableHighlight
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
                    </TouchableHighlight>


                    <Text style={styles.title}>
                        KEGEL
                    </Text>


                    <TouchableHighlight
                    style={styles.guideLink}
                    onPress={() => {
                        setRedirectGuideKegel({
                            redirectGuideKegel
                        })
                    }}
                    >
                    <Text style={styles.guideText}>
                        GUIDE
                    </Text>
                    </TouchableHighlight>
                </View>

                <Text 
                style={styles.text}>
                    {activity}
                </Text>
                   
                <StartCircle
                    duration={1000}
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
        backgroundColor: '#fc715e',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 8,
        paddingTop: Constants.statusBarHeight,
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
        right: 65,
    },

    homeText: {
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
    },

    title: {
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',

        bottom: 140,
    },

    guideLink: {
        bottom: 140,
        left: 65,
    },

    guideText: {
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
    },

    text: {
        fontFamily: 'Gopher-regular',
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
    },


    textSeconds: {
        fontFamily: 'Gopher-regular',
        fontSize: 48,
        color: 'white',

        left: 90, 
        top: 75,
      }, 

    icons: {
        flexDirection: 'row',
        top: 140
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

        fontFamily: 'Gopher-regular',
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

        fontFamily: 'Gopher-regular',
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
export default SlowTimer;

