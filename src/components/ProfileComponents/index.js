import React, { useContext } from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import { GlobalContext } from '../../context/Provider';
import {logoutUser} from '../../helpers/apiHelpers/authHelpers';
import { setEmptyCart } from '../../helpers/apiHelpers/cartHelpers';
import styles from './styles';

const ProfileComponents = ({navigation}) => {
  const {
    authDispatch, cartDispatch
  } = useContext(GlobalContext);
  const handleLogout = () => {
    Alert.alert('Logout', 'are you sure?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
          setEmptyCart()(cartDispatch);
        },
      },
    ]);
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text>Profile</Text>
        <Icon name="user-circle" size={100} />
        <Text style={{fontSize: 20}}>Gerald Arrivaldo</Text>
        <CustomButton
          onPress={() => {
            handleLogout();
          }}
          title="Log Out"
          white
          primary
        />
      </View>
    </View>
  );
};

export default ProfileComponents;
