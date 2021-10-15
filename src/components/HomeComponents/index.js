import React, {useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Header from '../Header';
import Carousel from '../../common/Carousels/Carousel';
import {dummyData} from '../../data/Data';
import ProductCard from '../../common/ProductCard';

const HomeComponents = ({dataProduct, productLoading}) => {

  return (
    <View style={{flex: 1}}>
      <Header/>
      <ScrollView style={{flex: 1}}>
        <Carousel data={dummyData} />
        {/* Kategori Populer */}
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              paddingHorizontal: 10,
            }}>
            Kategori Populer
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 195,
                marginBottom: 10,
                borderRadius: 8,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.grey,
              }}>
              <Text>Semua Kategori</Text>
            </View>
            <View
              style={{
                width: 195,
                marginBottom: 10,
                borderRadius: 8,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.danger,
              }}>
              <Text>Mie Instant</Text>
            </View>
            <View
              style={{
                width: 195,
                marginBottom: 10,
                borderRadius: 8,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.success,
              }}>
              <Text>Sereal</Text>
            </View>
            <View
              style={{
                width: 195,
                marginBottom: 10,
                borderRadius: 8,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.blue,
              }}>
              <Text>Biskuit</Text>
            </View>
          </View>
        </View>
        {/* Barang Terlaris */}

        <View style={styles.wrapperProduct}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>Barang Terlaris</Text>

          {productLoading && (
            <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
              <ActivityIndicator color={colors.primary} size="large" />
            </View>
          )}
          {!productLoading && (
            <View style={styles.homeContainer}>
              {dataProduct.map(product => {
                return (
                  <View style={styles.item} key={product.id}>
                    <ProductCard product={product} />
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeComponents;
