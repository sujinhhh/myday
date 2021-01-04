import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const DiaryList = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#aa79e4', '#e580b2']}
      style={styles.linearGradient}>
      <View>
        <Text style={styles.title}> 목록</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('DiaryView')}>
          <FontAwesome5 name="grin-tongue" size={25} color={'#fff'} />
          <Text style={styles.iconText}>조회</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('DiaryForm')}>
          <FontAwesome5 name="edit" size={25} color={'#fff'} />
          <Text style={styles.iconText}>작성하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('uploadImage')}>
          <FontAwesome5 name="edit" size={25} color={'#fff'} />
          <Text style={styles.iconText}>업로드</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default DiaryList;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  iconText: {
    paddingLeft: 5,
    fontSize: 15,
  },
});
