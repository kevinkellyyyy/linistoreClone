import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import CartListComponents from '../../components/CartListComponents';
import { GlobalContext } from '../../context/Provider';
import {getCartList, setCart} from '../../helpers/apiHelpers/cartHelpers';

const CartList = ({navigation}) => {
  const {
    cartDispatch
  } = useContext(GlobalContext)
  const [items, setItems] = useState([]);
  const [cartDetail, setCartDetail] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getCartList()
        .then(res => {
          setItemsLoading(true);
          setItems(res.data.result.carts.rows);
          setCartDetail(res.data.result.carts);
          setItemsLoading(false);
          setCart(res.data.result.carts)(cartDispatch); 
        })
        .catch(err => {
          console.log(err);
        });
    })
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
