import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import {getWarehouse} from '../../helpers/apiHelpers/warehouseHelpers';
import styles from './styles';

const OPTIONS = ['red', 'blue', 'yellow', 'green', 'orange', 'white', 'purple'];
const WIDTH = Dimensions.get('window').height;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props, {onPress}) => {
  const {
    dataDispatch,
    dataState: {
      getWarehouse: {dataWarehouse, warehouseLoading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getWarehouse()(dataDispatch);
  }, []);

  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option[(0, 1)]);
    props.vendor_id(option[0]);

    // props.setId(option[0]);
  };

  const renderItem = ({item}) => {
    // console.log('item', item);
    const {id, name} = item;
    return (
      <TouchableOpacity
        onPress={value => {
          onPressItem([item.id, item.name]);
        }}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  // const option = OPTIONS.map((item, index) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.option}
  //       key={index}
  //       onPress={() => onPressItem(item)}>
  //       <Text style={styles.text}>{item}</Text>
  //     </TouchableOpacity>
  //   );
  // });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}>
      <View style={[styles.modal, {width: '100%', height: HEIGHT / 2}]}>
        {/* <ScrollView>{option}</ScrollView> */}
        <FlatList
          renderItem={renderItem}
          data={dataWarehouse}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 0.5,
                  backgroundColor: colors.grey,
                }}></View>
            );
          }}
          keyExtractor={item => String(item.id)}
          // ListFooterComponent={<View style={{height: 150}}></View>}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;
