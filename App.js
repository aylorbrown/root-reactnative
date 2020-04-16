import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import {
  NativeRouter, 
  Switch, 
  Route } from 'react-router-native';

import Splash from './components/Splash';
import Home from './components/Home';
import ChooseExercise from '../front-end/components/ChooseExercise';
import GuidePelvic from '../front-end/components/GuidePelvic';
import GuideKegel from './components/GuideKegel';
import GuideBellyBreath from './components/GuideBellyBreath';
import GuideSquat from './components/GuideSquat';
import KegelFastTimer from './components/KegelFastTimer';
import KegelSlowTimer from './components/KegelSlowTimer';
import SquatTimer from './components/SquatTimer';
import BellyBreathTimer from './components/BellyBreathTimer';
import ProgressChart from './components/ProgressChart';


import UserContext from './components/UserContext';

import axios from 'axios';
const apiKey = "e5e8ae85-18a9-4c69-b321-f8a2068a7100";

console.disableYellowBox = true;

function getToken () {
  return axios({
    //
    url:'https://jsonbin.org/_/bearer',
    headers: {
      authorization: `token ${apiKey}`
    }
  }).then( resp => {
    // console.log(resp.data);
    // console.log('hello! hcxjhsdknsjdk  hfdskjnsd,jksdnf  hiflsanjkx')
    return resp.data.token;
  })
}

function saveData (dataToSave) {
  // get the token from getToken 
  // make an axios POST 
  // in axios post, send data to save 
  getToken()
  .then(token => {
    // make the axios post 
    axios({
      url: 'https://cors-anywhere.herokuapp.com/http://jsonbin.org/aylorbrown/kegel', 
      method: 'POST', 
      headers: {
        authorization: `Bearer ${token}` 
      }, 
      data: dataToSave
    });
  });
}

function getData () {
  return getToken()
  .then(token => {
    //
    return axios({
      url: 'https://cors-anywhere.herokuapp.com/http://jsonbin.org/aylorbrown/kegel',
      headers: {
        authorization: `Bearer ${token}` 
      }
    })
  })
  .then(resp => {
    // console.log('Got data!');
    return resp.data

  })
}

const getFonts = () => Font.loadAsync({
    'SuezOne-regular': require('./assets/fonts/SuezOne-Regular.ttf'), 
    'Gopher-regular': require('./assets/fonts/Gopher.ttf'), 
    'ApfelGrotezk-regular': require('./assets/fonts/ApfelGrotezk-Regular.otf')
  });

export default function AppRouter() {
  const [kegelData, setKegelData] = useState(
    [
      {day: 1, minutes: 0},
      {day: 2, minutes: 0},
      {day: 3, minutes: 0},
      {day: 4, minutes: 0},
      {day: 5, minutes: 0},
      {day: 6, minutes: 0},
      {day: 7, minutes: 0}
    ]
  );
  const [squatData, setSquatData] = useState(
    [
      {day: 1, minutes: 0},
      {day: 2, minutes: 0},
      {day: 3, minutes: 0},
      {day: 4, minutes: 0},
      {day: 5, minutes: 0},
      {day: 6, minutes: 0},
      {day: 7, minutes: 0}
    ]
  );
  const [breathData, setBreathData] = useState(
    [
      {day: 1, minutes: 0},
      {day: 2, minutes: 0},
      {day: 3, minutes: 0},
      {day: 4, minutes: 0},
      {day: 5, minutes: 0},
      {day: 6, minutes: 0},
      {day: 7, minutes: 0}
    ]
  );

  // getData()
  //   .then(kegelData, squatData => {
  //     // console.log('loading data from the API!')
  //     setKegelData(kegelData), 
  //     setSquatData(squatData)
  //   })


  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
      <UserContext.Provider
      value={{
        kegelData, 
        setKegelData, 
        squatData,
        setSquatData,
        breathData, 
        setBreathData,
        saveData
      }}
      >

      <NativeRouter>
        <View style={styles.container}>
          <Switch>

            <Route  exact path="/" component={Splash} />

            <Route 
            path="/Home" 
            component={Home} 
            value={kegelData, squatData, breathData} 
            />
  
            <Route 
            path="/ProgressChart" 
            component={ProgressChart} 
            value={kegelData, squatData, breathData} 
            />
          
            <Route path="/GuidePelvic" component={GuidePelvic} />
            
            <Route path="/ChooseExercise" component={ChooseExercise} />
              
            <Route path="/GuideKegel" component={GuideKegel} />

             
            <Route 
            path="/KegelFastTimer" 
            component={KegelFastTimer} 
            value={kegelData}
            setKegelData={setKegelData}
            saveData={saveData}
            />
            
            <Route 
            path="/KegelSlowTimer" 
            component={KegelSlowTimer} 
            value={squatData}
            setSquatData={setSquatData}
            saveData={saveData}
            />
             
            <Route path="/GuideSquat" component={GuideSquat} />
             
            <Route path="/SquatTimer" component={SquatTimer}  />

            <Route path="/GuideBellyBreath" component={GuideBellyBreath} />

            <Route 
            path="/BellyBreathTimer" 
            component={BellyBreathTimer} 
            value={breathData}
            setSquatData={setBreathData}
            saveData={saveData}
            />
              
          </Switch>
        </View>
      </NativeRouter>
      </UserContext.Provider>
      
        // <KegelSlowTimer
        // value={[]}
        // />
  
        // <SquatTimer 
        // value={[]}
        // />
    );
  } else {
    return (

      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc715e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
