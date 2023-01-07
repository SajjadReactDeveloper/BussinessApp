// Checkbox

import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import colors from '../constants/colors';

import {Checkbox} from 'react-native-paper';
import fontFamily from '../constants/fontFamily';

const Checkboxes = ({label, value, onValueChange, text}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 10, width: 324, height: 74}}>
        <Text style={styles.label}>{label}</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!value)}
          uncheckedColor={colors.text}
        />
      </View>
    </View>
  );
};

export default Checkboxes;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 324,
    height: 74,
  },
  label: {
    marginLeft: 10,
    color: colors.text,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    opacity: 0.5,
  },
  text: {
    position: 'absolute',
    color: colors.text,
    top: -10,
    left: 20,
    fontSize: 14,
    fontFamily: fontFamily.bold,
  },
});
