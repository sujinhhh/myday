import React from 'react';
import {View, Text} from 'react-native';
import PostDetail from '../../components/PostDetail';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';

const PostScreen = () => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <PostDetail post={post} />
    </View>
  );
};

export default PostScreen;
