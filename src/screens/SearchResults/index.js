import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
