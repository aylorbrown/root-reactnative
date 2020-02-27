import * as React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Animated, 
  Easing,
  TouchableOpacityBase} from 'react-native';


export default class StartCircle extends React.Component {
  constructor(props){
    super(props);
    console.log(props.duration);
    this.state = {
      start: .8,
      end: .6,
      duration: props.duration,
      scale: new Animated.Value(.8),
      isSqueezing: true
    } 
  }
  
  _start = () => {
    console.log('hello!')
    Animated.timing(this.state.scale, {
      toValue: this.state.end, // output
      duration: this.state.duration,
      easing: Easing.ease
    }).start(() => {
      console.log('done')
      this.setState({
        start: this.state.end,
        end: this.state.start,
        isSqueezing: !this.state.isSqueezing
      }, () => {
        this._start();
        // this.props.toggle();
      })
    });
  };

// use effect
  componentDidUpdate(prevProps) {
    if(prevProps.shouldRun !== this.props.shouldRun) {
      if (this.props.shouldRun) {
        this._start()
      }
    }
  }

  render () {
    return (

      <View style={styles.container}>
      <Animated.View style={{
          ...styles.circle,
          transform: [
            {scale: this.state.scale}
          ]}}>
        
          {/* look at this later */}
          {this.props.children}
      </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  },

  circle: {
  height: 200,
  width: 200,
  borderRadius: 200/2,
  backgroundColor: '#1c1aa9',
  borderWidth: 1,
  borderColor: 'black',
  flexDirection:'column',

  }
})


// when you flip it! 
// this.setState({
//   isSqueezing: !this.state.isSqueezing
// })