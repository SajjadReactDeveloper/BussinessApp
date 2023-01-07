// Dropdown component

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../constants/colors';

const DropDown = ({label, values, width}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  return (
    <View>
      <DropDownPicker
      style={[styles.container, {width: width}]}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={label}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: colors.backgroundColor,
    borderWidth: 0,
  },
});
