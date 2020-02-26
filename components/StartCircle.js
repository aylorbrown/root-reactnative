import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class PlainCircle extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
        </View>
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

  }
})