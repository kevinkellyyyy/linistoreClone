import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/LoginComponent';
import {HOME, HOME_NAVIGATOR, LOGIN} from '../../constants/routeNames';
import {GlobalContext} from '../../context/Provider';
import {loginUser} from '../../helpers/apiHelpers/authHelpers';

const Login = ({navigation}) => {
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});

  const {params} = useRoute();
  const {
    authDispatch,
    authState: {error, loading, pindah},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, user_login: params.data.user_login});
    }
    if (pindah === true) {
      navigate(HOME_NAVIGATOR, {screen: HOME});
    }
  }, [params, pindah]);

  const onSubmit = () => {
    if (form.user_login && form.password) {
      loginUser(form)(authDispatch);

      // navigation.navigate(HOME_NAVIGATOR);
    }
    // if (Object.values(errors).every(item => !item)) {
    //   console.log('error');
    // } else {
    //   navigate(HOME_NAVIGATOR, {screen: HOME});
    // }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      errors={errors}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
