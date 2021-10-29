import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {width: 30, height: 30},
  wrapperInput: {
    paddingHorizontal: 10,
    flex: 1,
    position: 'relative',
  },
  iconProfile: {
    alignItems: 'center',
    marginTop: 20,
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  navigateProfile: {
    justifyContent: 'center',
    marginTop: 20,
  },
  btnLogout: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.blue,
    width: 55,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    top: 27,
  },
  inputSearch: {
    paddingLeft: 35,
  },
  wrapperBanner: {
    padding: 10,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 150,
    borderRadius: 8,
    backgroundColor: colors.grey,
  },
  wrapperProduct: {
    padding: 5,
  },
  brgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Table: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff',
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  TableText: {
    margin: 10,
  },
  //   wrapper: {
  //     height: 42,
  //     borderWidth: 1,
  //     borderRadius: 4,
  //     paddingHorizontal: 5,
  //     marginTop: 5,
  //   },
  //   textInput: {flex: 1, width: '100%'},
  //   inputContainer: {paddingVertical: 12},
  //   error: {color: colors.danger, paddingTop: 4, fontSize: 12},
});
