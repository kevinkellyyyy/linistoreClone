import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import {screenDimension} from '../../constants/screenDimention';
import {getProductById} from '../../helpers/apiHelpers/productHelpers';

const ProductDetailScreen = ({route, navigation}) => {
  const [productDetail, setProductDetail] = useState({});
  const productId = route.params.productId;
  useEffect(() => {
    getProductById(productId)
      .then(res => {
        // console.log('res di product detail : ', res.data.result.product);
        setProductDetail(res.data.result.product);
      })
      .catch(err => {
        console.log('error di product detail : ', err);
      });
  }, [productId]);

  return (
    <View style={styles.productDetailContainer}>
      <Text>Halaman Product Detail.</Text>
      <Image source={{uri: productDetail.source}} style={styles.productImage} />
      <Text>{productDetail.concat_name}</Text>
      <View style={styles.warehouseStokWrapper}>
        <Text style={styles.warehouse}>{productDetail.warehouse_name}</Text>
        <Text style={styles.stock}>Stok {productDetail.unit_count}</Text>
      </View>
      <Text>Rp {productDetail.price}</Text>
      <Button
        title="Tambah ke Cart"
        // onPress={() => navigation.navigate('ProductDetail')}
      />
      <Text>Deskripsi</Text>
      <Text>{productDetail.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  productImage: {
    height: screenDimension.width,
    width: screenDimension.width,
  },
  warehouseStokWrapper: {
    flexDirection: 'row',
  },
  warehouse: {
    flex: 1,
    textAlign: 'left',
  },
  stock: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ProductDetailScreen;
