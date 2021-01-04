import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import uploadImage from '../../../assets/data/uploadImage';

const DiaryForm = (props) => {
  const [url, setUrl] = React.useState(null);
  const [hashtags, setHashtags] = React.useState('');
  const selectImage = function () {
    uploadImage()
      .then((url) => {
        setUrl(url);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}> 일기쓰기</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={selectImage}>
        <FontAwesome5 name="edit" size={25} color={'#fff'} />
        <Text style={styles.iconText}>이미지 선택</Text>
      </TouchableOpacity>
      {url && <Image style={styles.image} source={{uri: url}} />}

      <TextInput
        placeholder="#"
        alue={hashtags}
        onChangeText={(value) => setHashtags(value)}
      />
      <TouchableOpacity
        style={styles.savebtn}
        onPress={() => navigation.navigate('DiaryForm')}>
        <FontAwesome5 name="edit" size={25} color={'#fff'} />
        <Text style={styles.iconText}>저장하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DiaryForm;

const styles = StyleSheet.create({
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
  savebtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ce93d8',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  iconText: {
    paddingLeft: 5,
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
