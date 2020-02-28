import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

// You can import from local files
import SpringCircle from './SpringCircle';


export default class Splash extends React.Component {
  constructor(props){
    super(props);
    // when you load page, you dont want to redirect 
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() =>{
      // redirect information 
      this.setState({
        redirect: true
      })
      
    }, 7000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }


  render() {
    return (
      <View style={styles.container}
      
      >
        <Text style={styles.paragraph}>
          ROOT
        </Text>
        
        <TouchableWithoutFeedback onPress={() => history.push('/GuidePelvic')}>
        <SpringCircle />
        </TouchableWithoutFeedback>
      
        {this.state.redirect && <Redirect to='/GuidePelvic' />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fc715e',
    padding: 8,
  },
  paragraph: {
    margin: 48,
    fontSize: 48,
    color: '#1c1aa9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});