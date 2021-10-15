import React from 'react';
import {View, Text} from 'react-native';
import StatusTransaksiComponents from '../../components/StatusTransaksiComponents';
import {GlobalContext} from '../../context/Provider';

const Profile = () => {
  const {authDispatch} = React.useContext(GlobalContext);

  return <StatusTransaksiComponents authDispatch={authDispatch} />;
};

export default Profile;
