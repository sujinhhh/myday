import React from 'react';
import {View, Text, ImageBackground, Pressable, ScrollView} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView >
      <ImageBackground
        source={require('../../../assets/images/uniinfamily.jpg')}
        style={styles.image}>
        {/* Search Bar */}
        {/* <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchbuttonText}> 무엇을 찾으시나요? </Text>
        </Pressable> */}
        {/* Title */}
        <Text style={styles.title}>2021 오늘의 할일</Text>
        {/* Button */}
      </ImageBackground>
      <View style={styles.bottomContents}>
        <Pressable
          style={styles.bottomButton}
          onPress={() => console.log('explore clicked')}>
          <Text style={styles.buttonText}> 나의 하루를 알차고 신나게</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
