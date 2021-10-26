import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const Dropdown = ({onChange, error, errors}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'RetailKita Piyungan', value: 1},
    {label: 'RetailKita Semarang', value: 7},
    {label: 'RetailKita Minggir Sleman', value: 8},
    {label: 'RetailKita Nanggulan', value: 9},
    {label: 'RetailKita Ponjong', value: 10},
    {label: 'RetailKita Sumber Harjo', value: 11},
    {label: 'RetailKita Hasta Manunggal Mojolaban', value: 12},
    {label: 'RetailKita Ngadirojo Wng', value: 13},
    {label: 'RetailKita Kendal', value: 14},
    {label: 'Toko RetailKita Piyungan', value: 157},
  ]);

  return (
    <DropDownPicker
      style={styles.dropdownBox}
      listMode={'SCROLLVIEW'}
      placeholder="Pilih Gudang"
      selectedItemLabelStyle={{color: 'blue'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={value => {
        onChange({name: 'vendor_id', value});
      }}
    />
  );
};

export default Dropdown;
