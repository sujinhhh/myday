import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    height: '40%',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    opacity: 0.6,
    marginLeft: 25,
    borderRadius: 20,
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 'auto',
    // marginLeft: 'auto',
  },

  searchButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: Dimensions.get('screen').width - 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    position: 'absolute',
    marginBottom: 'auto',
  },
  searchbuttonText: {
    flexDirection: 'row',
    color: '#000',
    fontSize: 15,
    margin: 4,
  },
  bottomContents: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
  bottomButton: {
    backgroundColor: '#ff6090',
    borderRadius: 30,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    margin: 4,
  },
});

export default styles;
