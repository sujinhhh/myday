import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';

const Diary = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const renderAsset = (image) => {
    // if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
    //   return this.renderVideo(image);
    // }

    return renderImage(image);
  };

  const renderImage = (image) => {
    return (
      <Image
        style={{width: 300, height: 300, resizeMode: 'contain'}}
        source={image}
      />
    );
  };

  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => alert(e));
  };

  return (
    <LinearGradient
      colors={['#aa79e4', '#e580b2']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={{backgroundColor: '#fff'}}>
          <Text>나의 일기장</Text>
        </View>
        <ScrollView>
          {image ? renderAsset(image) : null}
          {images
            ? images.map((i) => <View key={i.uri}>{renderAsset(i)}</View>)
            : null}
        </ScrollView>

        <TouchableOpacity
          onPress={() => pickSingleWithCamera(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Image With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pickSingle(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Diary;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
