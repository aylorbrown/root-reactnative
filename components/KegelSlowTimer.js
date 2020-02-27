import React, { useEffect, useState } from 'react';
import {
    Text,
    Linking,
    View, 
    StyleSheet, 
    Button, 
    Image,
    TouchableWithoutFeedback, 
    TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';

import PauseImage from '../assets/pause.png';
import StartImage from '../assets/start.png';
import NextImage from '../assets/next.png'

import StartCircle from './StartCircle';



const SlowTimer = (
    {
    value,
    setValue, 
    saveData
    }
)  => {
    const MAXSECONDS = 1;
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(5);
    const [activity, setActivity] = useState('squeeze');
    // let history = useHistory();

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
      let interval = null;
      let littleTimer = null;

      let countDown = () => {
          if (seconds ==0){
              if (reps ==0) {
                // to get day of week 
                var d = new Date();
                var n = d.getDay();//5
                  let tempValue = [...value];
                  let currentDay = tempValue[n];
                  currentDay.minutes += 25/60
                saveData(tempValue);
                // history.push("/slowtimer");
                  setValue(
                      value = tempValue
                  )
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

        {/* <View style={styles.guide}> */}
        {/* <nav className='guide'>
        <Link to="/progress">HOME</Link>
        <Link to="#">TIMER</Link>    
        <Link to="/guide">GUIDE</Link>
        </nav> */}

        
            <View style={styles.paragraph}>
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

                    <TouchableWithoutFeedback
                    onPress={toggle}>
                        <Image 
                        source={isActive ? PauseImage : StartImage}
                        />
                    </TouchableWithoutFeedback>

                    <TouchableHighlight>
                        {/* on press go to progress page */}
                        <Image 
                        source={NextImage}
                        />
                    </TouchableHighlight>
                
                   {/* icons at the bottom to link to next page */}
                    {/* <Link to="/slowtimer" className="next-arrow"><img src='/next.png'/></Link> */}
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

      text: {
        fontSize: 24, 
        color: '#1c1aa9',
        fontWeight: 'bold',
      },


      textSeconds: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
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

        // transition: 1,
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
export default SlowTimer;

