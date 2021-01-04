import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import Router from './src/navigation/Router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
