import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const index = ({post}) => {
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}

      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* bed & bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed}bed {post.bedroom} bedrooms
      </Text>
      {/* type & discription */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type},{post.title}
      </Text>
      {/* old new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>${post.oldPrice}</Text>
        <Text style={styles.price}>${post.newPrice}/night</Text>
      </Text>
      {/* total price */}
      <Text style={styles.totalPrices}>${post.totalPrice}</Text>
    </Pressable>
  );
};

export default index;
