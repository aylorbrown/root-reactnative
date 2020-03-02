import React from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    ScrollView
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandler } from 'expo';


import Constants from 'expo-constants';
import SpringCircleGuide from './SpringCircleGuide';

const RightActions = () => {
    return (
        <View>
            <Text>START</Text>
        </View>
    )
}


export default function GuidePelvis() {
        return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

            <Text style={styles.text}>
            The pelvic floor is a group of muscles that attaches to the bones at the bottom of your pelvis. These muscles form a hammock across the base of the pelvis that supports the internal organs above it. Having strong and flexible pelvic floor muscles gives you proper control over your bladder and bowels, improve sexual performance and orgasm, help stabilize the hip joints, and act as a lymphatic pump for the pelvis. 
            </Text>
            
            <Text style={styles.text}>
            Your pelvic floor impacts not just your physical well-being, but also your emotional health. In Eastern traditions, the pelvic floor is known as the root chakra - it's where we tend to literally "hold" fears, specifically fears around primary instincts such as our health, safety, and our financial security. It is a "stress container," in that it's where we process the emotion and house our fight or flight reactions. 
            </Text>

            <Text style={styles.text}>
            When we are in a reactive state of stress, our natural biological reaction is to subconsciously clutch the pelvic floor. This clutching then sends out a system-wide message that throws our body into the sympathetic nervous system state of fight or flight, which accelerates the aging process, is exhausting, and makes us live in a reactive state.
            </Text>

            <Text style={styles.text}>
            Just like a clenched fist cannot grasp, a too-tight pelvic floor is unable to support the proper positioning and optimal function of the pelvic organs, bones, and vertebrae. When we clutch our pelvic floor, its hammock-like base pulls up and in like a rosebud. While you do want the ability to clutch this area sometimes, it's important that it also has the ability and space to expand and bloom like a flower as well. If you learn to isolate these muscles with a brain-body connection, you can have more power to control how you experience stress.
            </Text>

            <Text style={styles.text}>
            Use ROOT to incorporate pelvic floor exercises into your life until they become second nature. 
            </Text>

            <Text style={styles.text}>
            While this app was created to improve the physical and emotional well-being of people with vaginas, please note that all of the tools and information will still apply to you, regardless of gender. :)  
            </Text>

            <Swipeable
            renderRighttActions={RightActions}
            >
            <SpringCircleGuide />
            </Swipeable>
            {/* swipe to redirect to chooseexercise */}

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