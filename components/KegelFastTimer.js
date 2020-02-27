import React, { useEffect, useState } from 'react';
import {
    Linking,
    View, 
    StyleSheet, 
    Button, 
    Image
} from 'react-native';



const FastTimer = (
    {
    value,
    setValue, 
    saveData
    }
) => {
    const MAXSECONDS = 5;
    // declare initialize four states - seconds, isActive, reps, activity
    // seconds storer the value of the timer
    // isActive stores the timer's state for whether it is currently timing or paused, 
    // reps stores the value of the number of reps - stop timer after x many reps
    // activity toggles between squeeze and rest 
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(10);
    const [activity, setActivity] = useState('squeeze');
    // let history = useHistory();


    // combines start and pause into one function/ button
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
                  let tempValue = [...value];
                  let currentDay = tempValue[n];
                  currentDay.minutes += 50/60
                    console.log(currentDay);
                    // send to progress page when done with reps 
                saveData(tempValue);
                // history.push("/slowtimer");
                  setValue(
                      //increase time for the day 
                      //get the day number, where in array you are increasing 
                      // return the day of the week 
                      value = tempValue
                  )
              } else {
                  // reseting seconds to a different value
                  setSeconds(MAXSECONDS);
                  // resets the number of reps, countdowns number of reps 
                  setNumberReps(reps => reps - 1);
                  // reset activity
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

        <View style={styles.app}>

        {/* <View style={styles.guide}> */}
        {/* <nav className='guide'>
        <Link to="/progress">HOME</Link>
        <Link to="#">TIMER</Link>    
        <Link to="/guide">GUIDE</Link>
        </nav> */}

        
            <View style={style.time}>

            <View>
                    <h6>{activity}</h6>
                    <button className={activity == 'squeeze'? 'circle-timer-squeeze' : 'circle-timer-rest'}>{seconds}</button>
                    
                    <h6>{reps} reps to go</h6>
                   
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onPress={toggle}>
                    {isActive ? <Image source={require('../assets/pause.png')} /> : <Image source={require('../assets/start.png')} />}
                    </button>
                   
                   {/* icons at the bottom to link to next page */}
                    {/* <Link to="/slowtimer" className="next-arrow"><img src='/next.png'/></Link> */}
            </View>
            </View>
        </View>
        // </View>
    );
}


const styles= StyleSheet.create({

    app: {
        textAlign: 'center',
        backgroundColor: '#fc715e',
        // min-height: 100vh;
        // display: flex;
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 36,
        color: '#1c1aa9',
    },
    

    time: {
        width: 600,
        fontSize: 48,
    }

    



})
export default FastTimer;

