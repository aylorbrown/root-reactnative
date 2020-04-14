import React from 'react';

import { 
    Button, 
    View, 
    Text, 
    StyleSheet, 
    TextInput
 } from 'react-native';
import Constants from 'expo-constants';
import { Redirect } from 'react-router-native';

import axios from 'axios';





export default class signUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false, 
          first_name: '', 
          password: ''
        }
      }

      async login() {
        console.log('hello is this working?')
        let login = axios.post('http://10.150.30.150:3000/api/signup', {
            first_name: 'Fred',
            password: 'bambam'
        }).then( resp => {
          console.log(resp.data);
          return resp.data.token;
        }).catch(err => {
          console.log(err);
        })
      }

      // create login and signup functions 


    //   create handles for state first name and password 


    render() {
        return (
            <View>

\                {/* input for first name and password */}

                {/* button onpress calls axios function  */}
                <Button onPress={() => {

                }}>


                </Button>
            </View>
        )
    }
}
