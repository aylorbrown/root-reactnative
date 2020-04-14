import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Animated} from 'react-native';
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

import SpringCircle from './SpringCircle';



export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  // async test() {
  //   console.log('hello is this working?')
  //   let signup = axios.post('http://10.150.30.150:3000/api/signup', {
  //       first_name: 'Fred',
  //       password: 'bambam'
  //   }).then( resp => {
  //     console.log(resp.data);
  //     // console.log('hello! hcxjhsdknsjdk  hfdskjnsd,jksdnf  hiflsanjkx')
  //     return resp.data.token;
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

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
          <Text style={styles.swipeText}>START</Text>
        </Animated.Text>
      </RectButton>
    );
  };

  render() {

    return (
      
      <View style={styles.container}>
        {this.state.redirect && <Redirect to='/GuidePelvic' />}
        <Text style={styles.paragraph}>
          ROOT
        </Text>
        
        <Swipeable
        renderRightActions={this.renderRightActions}
        onSwipeableRightOpen={() => {
          // this.test();
          this.setState({
            redirect: true
          })
        }}>
        <SpringCircle />

        </Swipeable>
        
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 900,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fc715e',
    padding: 8,
  },
  paragraph: {
    fontFamily: 'SuezOne-regular',
    margin: 48,
    fontSize: 48,
    color: '#1c1aa9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  swipeText: {
    color: '#fc715e'
  }
   
});


// redirect timer 
 // constructor(props){
  //   super(props);
    // when you load page, you dont want to redirect 
  //   this.state = {
  //     redirect: false
  //   };
  // }

  // componentDidMount() {
  //   this.timeoutHandle = setTimeout(() =>{
      // redirect information 
  //     this.setState({
  //       redirect: true
  //     })
      
  //   }, 7000);
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timeoutHandle);
  // }