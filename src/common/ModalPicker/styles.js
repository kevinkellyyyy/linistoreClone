import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,

    justifyContent: 'center',
  },

  modal: {
    backgroundColor: 'grey',
    borderRadius: 10,
  },

  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
