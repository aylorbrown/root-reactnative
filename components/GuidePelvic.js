import React from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    ScrollView
} from 'react-native';

import Constants from 'expo-constants';
import SpringCircleGuide from '../components/SpringCircleGuide';


export default function GuidePelvis() {
        return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

            <Text style={styles.text}>
            The pelvic floor is a group of muscles that attaches to the bones at the bottom of your pelvis. These muscles effectively form a hammock across the base of your pelvis that supports the internal organs above it. Having strong pelvic floor muscles give you proper control over our bladder and bowels, improve sexual performance and orgasm, help stabilize the hip joints, and act as a lymphatic pump for the pelvis. 
            </Text>
            
            <Text style={styles.text}>
            In Eastern traditions, the pelvic floor is known as the root chakra - it's where we tend to literally "hold" fears, specifically fears around primary instincts such as our health, our family's safety, and our financial security. It is a "stress container," in that it's where we process the emotion and house our fight or flight reactions. 
            </Text>

            <Text style={styles.text}>
            When we lose the connection to those deep muscles, it becomes difficult to relax the area, meaning the pelvic floor becomes perma-flexed. Imagine flexing your bicep constantly and never fully letting go and you get the idea: After a while, this would cause your arm to lose flexibility, strength, and the ability to relax. That's more or less what happens to the pelvic floor until you become aware of the stress and tension and do some work to alleviate it. Part of this is willfully relaxing and unclenching these muscles - and then directing energy to build strength. 
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