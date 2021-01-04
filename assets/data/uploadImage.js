import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  noData: false,
};

const config = {
  headers: {
    Authorization: 'Client-ID 8a26359100784f2',
  },
};

async function uploadImage() {
  return new Promise((resolve, reject) => {
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        // reject( { message: 'User cancelled image picker' } );
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject({message: response.error});
      } else {
        const params = new FormData();
        params.append('image', response.data);

        axios
          .post('https://api.imgur.com/3/image', params, config)
          .then((response) => {
            resolve(response.data.data.link);
          })
          .catch((error) => {
            reject({message: error.response.data.data.error});
          });
      }
    });
  });
}

export default uploadImage;
