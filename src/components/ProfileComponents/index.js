import React, {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Alert, Picker} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import colors from '../../assets/theme/colors';
import Header from '../Header';
import {logoutUser} from '../../helpers/apiHelpers/authHelpers';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {
  AUTH_NAVIGATOR,
  PROFILE,
  STATUS_TRANSAKSI,
} from '../../constants/routeNames';

const ProfileComponents = ({navigation, authDispatch}) => {
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
        },
      },
    ]);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);

  const {navigate} = useNavigation();
  return (
    <View style={styles.body}>
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.navigateProfile}>
        <TouchableOpacity
          style={styles.btnLogout}
          onPress={() => {
            // setModalVisible(true);
            navigate(STATUS_TRANSAKSI, {screen: STATUS_TRANSAKSI});
          }}>
          <Text
            style={{
              color: colors.black,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Status Transaksi
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconProfile}>
        <Icon name="user-circle" size={100} />
      </View>
      <View style={styles.profile}>
        <Text style={{fontSize: 20}}>Name : Gerald Arrivaldo</Text>
        <Text style={{fontSize: 20}}>Email : gerald@umn.ac.id</Text>
        <Text style={{fontSize: 20}}>Jenis Kelamin : Laki-laki</Text>
        <Text style={{fontSize: 20}}>No.HP : 083899060680</Text>
        <Text style={{fontSize: 20}}>Tanggal Lahir : 8 Februari 1999</Text>
      </View>
    </View>
  );
};

export default ProfileComponents;
