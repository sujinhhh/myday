import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  bedrooms: {
    fontSize: 18,
    color: '#6d6d6d',
    marginVertical: 10,
  },
  description: {
    fontSize: 20,
    paddingVertical: 10,
    lineHeight: 26,
  },
  prices: {
    fontSize: 20,
    color: '#263238',
    paddingVertical: 10,
  },
  price: {
    paddingLeft: 20,
    fontSize: 20,
    color: '#263238',
  },
  oldPrices: {
    fontSize: 20,
    color: '#bdbdbd',
    textDecorationLine: 'line-through',
  },
  totalPrices: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  longdescription: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 24,
  },
});
export default styles;
