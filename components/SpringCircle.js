import React from 'react'
import {
    Animated, 
    Dimensions,
    View, 
    StyleSheet
} from 'react-native';
import { useSpring, animated } from 'react-spring';


const calc = (x, y) => [-(y - Dimensions.get('window').height / 2) / 20, (x - Dimensions.get('window').width / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans = (x, y, s) => [
    {perspective: 600},
    {rotateX: `${x}deg`},
    {rotateY: `${y}deg`},
    {scale:s}
]
const AnimatedView = animated(View);

export default function SpringCircle() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 3350, friction: 80 } }))
  console.log('hello again!')
  console.table(animated);
  return (
    
    <AnimatedView
    // adds gesture response 
    onStartShouldSetResponder={() => true}
    onResponderMove={(evt) => {
        // console.log(x,y);
        // set x and y 
        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY;

        console.log(evt.nativeEvent);
        console.log('its moving!');
        set({ xys: calc(x, y) })
    }}
    onResponderRelease={() => {
        console.log('hello! from the room!')
        set({ xys: [0, 0, 1] })}}
    style={{ transform: props.xys.interpolate(trans), ...styles.card}}
    >
    </AnimatedView>
  )
}

const styles = StyleSheet.create({
    card: {
        height: 300, 
        width: 300,
        borderRadius: 300/2,
        backgroundColor: '#1c1aa9',
        borderWidth: 1,
        borderColor: 'black',
      

    }
})

