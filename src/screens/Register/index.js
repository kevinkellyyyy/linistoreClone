import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/RegisterComponent';
import {LOGIN} from '../../constants/routeNames';
import {GlobalContext} from '../../context/Provider';
import {clearAuthState, regisUser} from '../../helpers/apiHelpers/authHelpers';
import {getWarehouse} from '../../helpers/apiHelpers/warehouseHelpers';

const Register = () => {
  const [form, setForm] = useState({});

  const {navigate} = useNavigation();
  const [modalTermVisible, setModalTermVisible] = useState(false);
  const [modalPrivacyVisible, setModalPrivacyVisible] = useState(false);

  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {error, loading, data},
    dataDispatch,
    dataState: {
      getWarehouse: {dataWarehouse, warehouseLoading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getWarehouse()(dataDispatch);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    // setForm({...form, [name]: value}, (tnc = true));
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (name === 'password_confirmation') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    console.log(form);

    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: 'Mohon masukkan nama'};
      });
    }
    if (!form.phone_number) {
      setErrors(prev => {
        return {...prev, phone_number: 'Mohon masukkan no Hp'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Mohon masukkan password'};
      });
    }
    if (!form.password_confirmation) {
      setErrors(prev => {
        return {
          ...prev,
          password_confirmation: 'Mohon masukkan konfirmasi password',
        };
      });
    }
    if (form.password !== form.password_confirmation) {
      setErrors(prev => {
        return {
          ...prev,
          password_confirmation:
            'Konfirmasi Password harus sama dengan password',
        };
      });
    }
    if (!form.vendor_id === null) {
      setErrors(prev => {
        return {...prev, vendor_id: 'Mohon pilih gudang'};
      });
    }
    if (!form.tnc === 'false') {
      setErrors(prev => {
        return {...prev, tnc: 'Mohon pilih dicentang'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(errors).every(item => !item)
    ) {
      regisUser(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <RegisterComponent
      modalTermVisible={modalTermVisible}
      setModalTermVisible={setModalTermVisible}
      modalPrivacyVisible={modalPrivacyVisible}
      setModalPrivacyVisible={setModalPrivacyVisible}
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      dataWarehouse={dataWarehouse}
      warehouseLoading={warehouseLoading}
      loading={loading}
    />
  );
};

export default Register;
