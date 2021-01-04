import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigation from '../navigation/SearchResultsTabNavigation';
import GeustsScreen from '../screens/Guests';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigation}
        options={{
          title: ' 가고 싶은 곳을 적어 보세요',
        }}
      />
      <Stack.Screen
        name={'Guests'}
        component={GeustsScreen}
        options={{
          title: ' 몇명이 여행하시나요',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
