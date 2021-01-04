import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DestinationSearchScreen from '../screens/DestinationSearch';
import GeustsScreen from '../screens/Guests';
import HomeTabNavigator from '../navigation/HomeTapNavigator';
import PostScreen from '../screens/PostScreen';
import DiaryForm from '../screens/Dairy/DiaryForm';
import DiaryList from '../screens/Dairy/DiaryList';
import DiaryView from '../screens/Dairy/DiaryView';
import uploadImage from '../../assets/data/uploadImage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
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
        <Stack.Screen
          name={'DiaryView'}
          component={DiaryView}
          options={{
            title: 'DiaryView',
          }}
        />
        <Stack.Screen
          name={'DiaryForm'}
          component={DiaryForm}
          options={{
            title: 'DiaryForm',
          }}
        />
        <Stack.Screen
          name={'DiaryList'}
          component={DiaryList}
          options={{
            title: 'DiaryList',
          }}
        />
        <Stack.Screen
          name={'uploadImage'}
          component={uploadImage}
          options={{
            title: 'Upload',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
