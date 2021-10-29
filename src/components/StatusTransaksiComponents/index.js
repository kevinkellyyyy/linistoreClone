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
import {AUTH_NAVIGATOR, PROFILE} from '../../constants/routeNames';

const StatusTransaksiComponents = ({navigation, authDispatch}) => {
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
            navigate(PROFILE, {screen: PROFILE});
          }}>
          <Text
            style={{
              color: colors.black,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconProfile}>
        <Icon name="user-circle" size={100} />
      </View>
      <View style={styles.profile}>
        {/* <Text style={{fontSize: 20}}>Name : Gerald Arrivaldo</Text>
          <Text style={{fontSize: 20}}>Email : gerald@umn.ac.id</Text>
          <Text style={{fontSize: 20}}>Jenis Kelamin : Laki-laki</Text>
          <Text style={{fontSize: 20}}>No.HP : 083899060680</Text>
            <Text style={{fontSize: 20}}>Tanggal Lahir : 8 Februari 1999</Text> */}
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 50,
            width: 300,
            marginBottom: 100,
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Menunggu Pembayaran" value="true" />
          <Picker.Item label="Gagal" value="true" />
          <Picker.Item label="Sukses" value="false" />
        </Picker>
        {!selectedValue ? (
          <View style={styles.profile}>
            <Text style={{fontSize: 20}}>Belum Ada</Text>
            <Text style={{fontSize: 20}}>pembayaran yang dilakukan</Text>
          </View>
        ) : (
          <View style={styles.profile}>
            <Text style={{fontSize: 20}}>Ada</Text>
            <Text style={{fontSize: 20}}>pembayaran yang dilakukan</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default StatusTransaksiComponents;
