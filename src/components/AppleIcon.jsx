// Apple Icon

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const AppleIcon = () => {
  return (
    <View>
      <Image source={require('../../assets/apple.png')} style = {{ marginRight: 10 }} />
    </View>
  );
};

export default AppleIcon;
