import React from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    ScrollView
} from 'react-native';

import Constants from 'expo-constants';
import SpringCircleGuide from './SpringCircleGuide';


export default function GuideKegel() {
        return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

            <Text style={styles.text}>
            Before you can release and enhance the well-being of your pelvic floor, first you have to feel it and connect with it. 

            </Text>
            
            <Text style={styles.text}>
            Close your eyes and visualize the muscles at the base of your core, between your sitz bones, that you would use to cut your pee off midstream. Without using your butt or abs, contract your rosebud, pull it up into your body, and hold it. You should feel a tightening around your vagina. 
            </Text>

            <Text style={styles.text}>
            Contrast this move by letting go of the muscles, feeling space between your site bones, and allowing your rose to loom. Feel the base of your core real, and then relax and expand a little more from there until you experience a complete surrender or holding. You will feel your belly relax, your shoulders melt, and your jaw and head release. 
            </Text>

            <SpringCircleGuide />

            </ScrollView>

        </SafeAreaView>
        );
    }  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#fc715e',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    scrollView: {
        marginHorizontal: 20,
    },

    text: {
        textAlign: 'justify',
        color: '#1c1aa9',
        fontWeight: '600',
        fontSize: 18,
        padding: 30,
    }
  });