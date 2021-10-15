import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from '../../common/Icon';
import colors from '../../assets/theme/colors';

const CartItem = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 20,
      }}>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: item.product_source}}
      />
      <View style={{paddingTop: 15, paddingLeft: 20}}>
        <Text numberOfLines={1} style={{width: 200}}>
          {item.concat_name}
        </Text>
        <Text>Stock : {item.product_unit_count}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Icon style={{color: colors.blue}} name="minus-circle" size={17} />
          </TouchableOpacity>
          <Text style={{paddingHorizontal: 10}}>{item.quantity}</Text>
          <TouchableOpacity>
            <Icon style={{color: colors.blue}} name="plus-circle" size={17} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Icon style={{color: colors.danger}} name="trash" size={17} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>SubTotal</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text>Rp {item.product_total}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
