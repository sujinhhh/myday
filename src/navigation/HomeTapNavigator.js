import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreNavigator from '../navigation/ExploreNavigator';
import PostScreen from '../screens/PostScreen';
import SearchResultsScreen from '../screens/SearchResults';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Todos from '../screens/Todos';
import DiaryList from '../screens/Dairy/DiaryList';

const Tab = createBottomTabNavigator();

const HomeTapNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        keyboardHidesTabBar: true,
        position: 'absolute',
      }}>
      <Tab.Screen
        name={'홈'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'오늘 할일'}
        component={Todos}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'일기쓰기'}
        component={DiaryList}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="dog" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'게임하기'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="grin-squint-tears" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="heart-eyes" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTapNavigator;
