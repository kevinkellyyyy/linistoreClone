import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React, { useContext } from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';
import colors from '../../assets/theme/colors';
import { PRODUCT_DETAIL } from '../../constants/routeNames';
import { GlobalContext } from '../../context/Provider';

const ProductCard = ({product}) => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  const addToCart = productId => {
    console.log(productId);
    if (!isLoggedIn) {
      Toast.showWithGravity(
        'Gagal tambah ke keranjang, silahkan melakukan login terlebih dahulu',
        Toast.LONG,
        Toast.BOTTOM,
        100,
        100,
      );
    }
  };

  return (
    <View style={styles.cardProduct}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PRODUCT_DETAIL, {
            productId: product.id,
          })
        }>
        <Image source={{uri: product.source}} style={styles.imgProduct} />
        <Text numberOfLines={2} style={styles.productName}>{product.concat_name}</Text>
        <Text style={styles.productStok}>Stok : {product.unit_count}</Text>
        <Text style={styles.productPrice}>Rp {product.price}</Text>
        <Text style={styles.productLocation}>{product.vendor_name}</Text>
        <TouchableOpacity onPress={() => addToCart(product.id)}>
          <Text style={styles.btnBuy}>Beli</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardProduct: {
    // flex: 1,
    padding: 18,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    // width: 227,
  },
  imgProduct: {
    // width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productStok: {
    marginTop: 9,
    fontSize: 12
  },
  productPrice: {
    color: colors.blue,
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold'
  },
  productLocation: {
    marginTop: 5,
    fontSize: 12
  },
  btnBuy: {
    marginTop: 10,
    height: 25,
    backgroundColor: colors.blue,
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ProductCard;
