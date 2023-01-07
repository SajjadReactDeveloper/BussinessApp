// Google Icon

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const GoogleIcon = () => {
  return (
    <View>
      <Image source={require('../../assets/google.png')} style = {{ marginRight: 10 }} />
    </View>
  );
};

export default GoogleIcon;
