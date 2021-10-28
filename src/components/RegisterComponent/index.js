import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../common/Container';
import CustomButton from '../../common/CustomButton';
import Input from '../../common/Input';
import {HOME_NAVIGATOR, LOGIN} from '../../constants/routeNames';
import Message from '../../common/Message';
import styles from './styles';
import Icon from '../../common/Icon';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import AppModal from '../../common/AppModal';
import AppModalTerm from '../../common/AppModalTerm';
import AppModalPrivacy from '../../common/AppModalPrivacy';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  data,
  dataWarehouse,
  warehouseLoading,
  modalTermVisible,
  setModalTermVisible,
  modalPrivacyVisible,
  setModalPrivacyVisible,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  //DropDown
  // const [chooseData, setChooseData] = useState('Pilih Gudang');
  // const [checkboxState, setCheckboxState] = React.useState(false);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const changeModalVisibility = bool => {
  //   setIsModalVisible(bool);
  // };

  // const setData = option => {
  //   setChooseData(option);
  //   console.log(option);
  // };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
    <>
      <Container>
        <Image
          height={70}
          width={80}
          source={require('../../assets/images/linistore-logo.png')}
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>Selamat Datang di LINISTORE</Text>
          <Text style={styles.subTitle}>Yuk Buat Akunmu!</Text>

          <View style={styles.form}>
            {error?.error && (
              <Message retry danger retryFn={onSubmit} message={error?.error} />
            )}
            {/* {error?.error && <Text>{error.error}</Text>} */}
            <Input
              label="Nama"
              iconPosition="right"
              placeholder="Masukkan Nama"
              error={errors.name || error?.name?.[0]}
              onChangeText={value => {
                onChange({name: 'name', value});
              }}
            />

            <Input
              label="No. Hp"
              iconPosition="right"
              placeholder="Masukkan No. hp"
              error={errors.phone_number || error?.phone_number?.[0]}
              onChangeText={value => {
                onChange({name: 'phone_number', value});
              }}
            />

            <Input
              label="Password"
              placeholder="Enter Password"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Text>
                    {isSecureEntry ? (
                      <View style={{opacity: 0.5}}>
                        <Icon name="eye-slash" size={20} />
                      </View>
                    ) : (
                      <View style={{opacity: 0.5}}>
                        <Icon name="eye" size={20} />
                      </View>
                    )}
                  </Text>
                </TouchableOpacity>
              }
              iconPosition="right"
              error={errors.password || error?.password?.[0]}
              onChangeText={value => {
                onChange({name: 'password', value});
              }}
            />
            <Input
              label="Konfirmasi Password"
              placeholder="Masukkan Konfirmasi Password"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Text>
                    {isSecureEntry ? (
                      <View style={{opacity: 0.5}}>
                        <Icon name="eye-slash" size={20} />
                      </View>
                    ) : (
                      <View style={{opacity: 0.5}}>
                        <Icon name="eye" size={20} />
                      </View>
                    )}
                  </Text>
                </TouchableOpacity>
              }
              iconPosition="right"
              error={
                errors.password_confirmation ||
                error?.password_confirmation?.[0]
              }
              onChangeText={value => {
                onChange({name: 'password_confirmation', value});
              }}
            />
            <Text style={{paddingVertical: 7}}>Pilih Gudang Terdekat</Text>

            <DropDownPicker
              listMode={'SCROLLVIEW'}
              placeholder="Pilih Gudang"
              selectedItemLabelStyle={{color: 'blue'}}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              error={errors.vendor_id || error?.vendor_id?.[0]}
              onChangeValue={value => {
                console.log('sinidah', value);
                onChange({name: 'vendor_id', value});
              }}
            />

            <View style={styles.checkboxWrapper}>
              <CheckBox
                disabled={false}
                color="blue"
                value={toggleCheckBox}
                error={errors.tnc || error?.tnc?.[0]}
                onValueChange={value => {
                  setToggleCheckBox(value);
                  onChange({name: 'tnc', value});
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <Text style={{fontSize: 12}}>
                  Dengan ini saya setuju dengan
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalTermVisible(true);
                  }}>
                  <Text style={{fontSize: 12, color: 'blue'}}>
                    {' '}
                    syarat dan ketentuan
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 12}}>, serta</Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalPrivacyVisible(true);
                  }}>
                  <Text style={{fontSize: 12, color: 'blue'}}>
                    kebijakan privasi{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 12}}>LINIID</Text>
              </View>
            </View>
            <AppModalTerm
              setModalTermVisible={setModalTermVisible}
              modalTermVisible={modalTermVisible}
            />
            <AppModalPrivacy
              setModalPrivacyVisible={setModalPrivacyVisible}
              modalPrivacyVisible={modalPrivacyVisible}
            />

            {console.log('err', error)}

            <CustomButton
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
              primary
              white
              title="Register"
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}>
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
};

export default RegisterComponent;
