import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* Row 1*/}
        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text
              style={{
                color: '#aebfbe',
              }}>
              Ages 13 or above
            </Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            {/* + */}
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}> + </Text>
            </Pressable>
          </View>
        </View>
        {/* -- end Row 1 */}
        {/* Row 2*/}
        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text
              style={{
                color: '#aebfbe',
              }}>
              Ages 2-12
            </Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            {/* + */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}> + </Text>
            </Pressable>
          </View>
        </View>
        {/* -- end Row 2 */}
        {/* Row 3*/}
        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infant</Text>
            <Text
              style={{
                color: '#aebfbe',
              }}>
              Under 2
            </Text>
          </View>
          {/* Buttons with value */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            {/* + */}
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}> + </Text>
            </Pressable>
          </View>
        </View>
        {/* -- end Row 3 */}
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          });
        }}
        style={{
          marginBottom: 20,
          backgroundColor: '#f14554',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 30,
        }}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
