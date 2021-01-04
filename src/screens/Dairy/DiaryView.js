import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const DiaryView = () => {
  return (
    <View>
      <Text style={styles.title}> View</Text>
    </View>
  );
};

export default DiaryView;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
