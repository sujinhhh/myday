import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const PostDtail = ({post}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
        {/* Description */}
        <Text style={styles.longdescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default PostDtail;
