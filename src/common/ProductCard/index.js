import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';
import { PRODUCT_DETAIL } from '../../constants/routeNames';

const ProductCard = ({product}) => {
  const navigation = useNavigation();

  const addToCart = productId => {
    console.log(productId);
    if (product) {
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
        <Text style={styles.productName}>{product.concat_name}</Text>
        <Text style={styles.productPrice}>Rp {product.price}</Text>
        <Text style={styles.productLocation}>{product.warehouse_name}</Text>
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
    marginTop: 20,
  },
  imgProduct: {
    // width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    color: 'orange',
    marginTop: 10,
  },
  productLocation: {
    marginTop: 10,
  },
  btnBuy: {
    marginTop: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ProductCard;
