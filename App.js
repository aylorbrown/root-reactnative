import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  NativeRouter, 
  Switch, 
  Route } from 'react-router-native';

import Splash from './components/Splash';
import Home from './components/Home';
import GuidePelvic from '../front-end/components/GuidePelvic';
import ChooseExercise from '../front-end/components/ChooseExercise';
import GuideKegel from './components/GuideKegel';
import KegelFastTimer from './components/KegelFastTimer';
import KegelSlowTimer from './components/KegelSlowTimer';
import GuideSquat from './components/GuideSquat';
import SquatTimer from './components/SquatTimer';


import SpringCircle from './components/SpringCircle';
import ProgressChart from './components/ProgressChart';
import UserContext from './components/UserContext';


export default function AppRouter() {
  const [value, setValue] = useState(
    [
      {day: 7, minutes: 0},
      {day: 1, minutes: 0},
      {day: 2, minutes: 0},
      {day: 3, minutes: 0},
      {day: 4, minutes: 0},
      {day: 5, minutes: 0},
      {day: 6, minutes: 0}
    ]
  );

  // set state here 
    // getProvidesAudioData()
    // .then(data => {
    //   setValue(data)
    // })
  return (
    // <UserContext.Provider
    // value={{
    //   value, 
    //   setValue, 
    //   saveData
    // }}
    // >
      
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Splash} />
          
          <Route path="/Home" component={Home} />
        
          <Route path="/GuidePelvic" component={GuidePelvic} />
          
          <Route path="/ChooseExercise" component={ChooseExercise} />
            
          <Route path="/GuideKegel" component={GuideKegel} />
           
          <Route path="/KegelFastTimer" component={KegelFastTimer} />
          
          <Route path="/KegelSlowTimer" component={KegelSlowTimer} />
           
          <Route path="/GuideSquat" component={GuideSquat} />
           
          <Route path="/SquatTimer" component={SquatTimer}  />
            
        </Switch>
      </View>
    </NativeRouter>
    // </UserContext.Provider>
    
      // <KegelSlowTimer
      // value={[]}
      // />

      // <SquatTimer 
      // value={[]}
      // />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc715e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
