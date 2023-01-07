// TextField Component
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../constants/colors';
import { TextInput } from 'react-native-paper';

const TextField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <>
      <TextInput
        label={label}
        style={styles.input}
        mode="outlined"
        // placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="black"
        outlineColor={colors.backgroundColor}
        activeOutlineColor='black'
        textColor='black'
        contentStyle = {styles.input}
        outlineStyle = {styles.input}
      />
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: colors.backgroundColor,
  },
});
