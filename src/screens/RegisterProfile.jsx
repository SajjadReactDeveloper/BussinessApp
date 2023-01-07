import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// import Constant
import colors from '../constants/colors';
import fontFamily from '../constants/fontFamily';

//Importing Components
import Logo from '../components/Logo';
import TextField from '../components/TextField';
import Button from '../components/Button';
import DropDown from '../components/DropDown';

const RegisterProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.signintxt}>
          Join <Text style={{color: colors.primary}}>Hashi</Text>
        </Text>
        <Logo />
        <Text style={styles.fillText}>Kindly fill in your details</Text>
        <View style={styles.textInputContaier}>
          <TextField placeholder="First Name" label="First Name" />
          <TextField placeholder="Last Name" label="Last Name" />
          <DropDown label="Gender" />
          <View style = {styles.birthday}>
            <DropDown label="MM" width={110} />
            <DropDown label="DD" width={110} />
            <DropDown label="YYYY" width={110} />
          </View>
          <Button
            text={'Next'}
            onPressHandler={() => {}}
            styleHandler={{marginVertical: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 19,
  },
  signintxt: {
    color: colors.text,
    fontSize: 27,
    fontFamily: fontFamily.semiBold,
    top: 10,
    fontWeight: '600',
    letterSpacing: -0.928786,
    lineHeight: 33,
  },
  fillText: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.5,
    position: 'absolute',
    top: 250,
    lineHeight: 19,
    fontFamily: fontFamily.secondary,
  },
  textInputContaier: {
    width: '100%',
    marginTop: 10,
    position: 'absolute',
    top: 320,
  },
  birthday: {
    flexDirection: 'row',
  }
});
