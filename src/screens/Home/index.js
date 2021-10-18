import React, {useContext, useEffect, useState} from 'react';
import HomeComponents from '../../components/HomeComponents';

import {GlobalContext} from '../../context/Provider';
import { getCartList, setCart } from '../../helpers/apiHelpers/cartHelpers';
import {getProductList} from '../../helpers/apiHelpers/productHelpers';

const Home = ({navigation}) => {
  const {
    cartDispatch,
    authState: {isLoggedIn, data},
  } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    setProductsLoading(true);
    getProductList(isLoggedIn ? data.vendor_id : null)
      .then(res => {
        setProducts(res.data.result.products.rows);
        setProductsLoading(false);
      })
      .catch(err => {
        console.log('error di home : ', err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      getCartList()
        .then(res => {
          setCart(res.data.result.carts)(cartDispatch);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <HomeComponents dataProduct={products} productLoading={productsLoading} />
  );
};

export default Home;
