import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import CartListComponents from '../../components/CartListComponents';
import {getCartList} from '../../helpers/apiHelpers/cartHelpers';

const CartList = () => {
  const [items, setItems] = useState([]);
  const [cartDetail, setCartDetail] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    getCartList()
      .then(res => {
        setItemsLoading(true);
        setItems(res.data.result.carts.rows);
        setCartDetail(res.data.result.carts);
        setItemsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <CartListComponents
      itemList={items}
      itemLoading={itemsLoading}
      cartDetail={cartDetail}
    />
  );
};

export default CartList;

// const [productsLoading, setProductsLoading] = useState(false);

//   useEffect(() => {
//     setProductsLoading(true);
//     getProductList(isLoggedIn ? data.data.vendor_id : null)
//       .then(res => {
//         // console.log('res di home : ', res.data.result.products.rows);
//         setProducts(res.data.result.products.rows);
//         setProductsLoading(false);
//       })
//       .catch(err => {
//         console.log('error di home : ', err);
//       });
//   }, []);

//   return (
//     <HomeComponents dataProduct={products} productLoading={productsLoading} />
//   );
