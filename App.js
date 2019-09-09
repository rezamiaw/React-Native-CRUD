import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from './src/component/LoginForm';

export default class App extends Component{
  render() {
    return(
      <LoginForm />
    );
  }
}