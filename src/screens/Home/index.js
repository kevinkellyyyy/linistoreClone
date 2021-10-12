import React, {useContext, useEffect, useState} from 'react';
import HomeComponents from '../../components/HomeComponents';
import getBarang from '../../context/actions/warehouse/getBarang';
import getData from '../../context/actions/warehouse/getData';

import {GlobalContext} from '../../context/Provider';
import {getProductList} from '../../helpers/apiHelpers/productHelpers';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    console.log('jalan');
    setProductsLoading(true);
    getProductList()
      .then(res => {
        // console.log('res di home : ', res.data.result.products.rows);
        setProducts(res.data.result.products.rows);
        setProductsLoading(false);
      })
      .catch(err => {
        console.log('error di home : ', err);
      });
  }, []);

  return (
    <HomeComponents dataProduct={products} productLoading={productsLoading} />
  );
};

export default Home;
