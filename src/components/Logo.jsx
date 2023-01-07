// Logo

import React from 'react';

import {StyleSheet, View, Image} from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style = {{ marginLeft: -20, top: 40 }} />
    </View>
  );
};

export default Logo;
