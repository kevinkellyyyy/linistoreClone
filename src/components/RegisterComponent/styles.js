import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
// import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {height: 150, width: 150, alignSelf: 'center', marginTop: 50},
  title: {fontSize: 21, textAlign: 'center', paddingTop: 20, fontWeight: '500'},
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  form: {paddingTop: 20},
  createSection: {
    flexDirection: 'row',
  },

  dropdownWrapper: {
    flex: 1,
    borderRadius: 4,
    opacity: 0.6,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },

  txtBtnDropdown: {
    fontSize: 17,
  },

  checkboxWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
    textAlign: 'center',
  },

  btnDropdown: {
    width: '100%',
  },

  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
