import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import Header from '../Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {
  HStack,
  Stack,
  Center,
  Heading,
  NativeBaseProvider,
  Box,
  Divider,
  ScrollView,
} from 'native-base';
import {CHECKOUT_CART, HOME} from '../../constants/routeNames';

import CartItem from '../../common/CartItem';

const CartListComponents = ({itemList, itemLoading, cartDetail}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Header />
        <Text style={{padding: 20}}>Keranjang Belanja</Text>
        {itemLoading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!itemLoading &&
          (itemList < 1 ? (
            <View>
              <Center>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </Center>
              <Text>
                Anda belum memasukkan barang apapun di keranjang belanja.
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
                <Text
                  style={{
                    height: 25,
                    width: '100%',
                    backgroundColor: colors.blue,
                    borderRadius: 8,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 14,
                  }}>
                  Belanja Sekarang
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{padding: 10}}>
              <View
                style={{
                  borderWidth: 1,
                  padding: 20,
                  shadowColor: '#000000',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                  borderRadius: 10,
                  width: '100%',
                }}>
                <View style={{flexDirection: 'row', padding: 10}}>
                  <Image
                    width={17}
                    height={17}
                    source={require('../../assets/images/store.png')}
                  />
                  <Text>{itemList[0].product_vendor_name}</Text>
                </View>

                {itemList.map(item => {
                  return (
                    <View key={item.id}>
                      <CartItem item={item} />
                    </View>
                  );
                })}
              </View>

              <Box
                h="150"
                w="100%"
                border={1}
                borderWidth={1}
                borderColor="black"
                borderRadius={8}>
                <HStack justifyContent="space-between" space={2} p={5}>
                  <Text>Total Belanja</Text>
                  <Text>Rp {cartDetail.total}</Text>
                </HStack>
                <HStack justifyContent="space-between" space={2} p={5}>
                  <Text>
                    {cartDetail.total_item} Barang dari{' '}
                    {cartDetail.vendor_ids.length} Toko
                  </Text>
                  <Text>Tidak Ada Ongkos Kirim</Text>
                </HStack>
                <TouchableOpacity
                  onPress={() => navigation.navigate(CHECKOUT_CART)}>
                  <Text
                    style={{
                      height: 25,
                      width: '100%',
                      backgroundColor: colors.blue,
                      borderRadius: 8,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    Konfirmasi Belanja
                  </Text>
                </TouchableOpacity>
              </Box>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default CartListComponents;
