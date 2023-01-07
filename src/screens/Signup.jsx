import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import fontFamily from '../constants/fontFamily';

// Importing Components
import TextField from '../components/TextField';
import Button from '../components/Button';
import Logo from '../components/Logo';

//Import Icon
import GoogleIcon from '../components/GoogleIcon';
import AppleIcon from '../components/AppleIcon';
import FacebookIcon from '../components/FacebookIcon';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.signintxt}>
          Join <Text style={{color: colors.primary}}>Hashi</Text>
        </Text>
        <Logo />
        <Text style={styles.agreeText}>
          By joining I agree to receive emails {'\n'}
          from Hashi
        </Text>
        <View style={styles.textInputContaier}>
          <TextField placeholder="Email" label="Email" />

          <Button
            text={'Continue'}
            onPressHandler={() => {}}
            styleHandler={{marginVertical: 10}}
          />

          <Text style={styles.continueText}>Or Continue with</Text>
          <View style={styles.iconContainer}>
            <GoogleIcon />
            <AppleIcon />
            <FacebookIcon />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.text,
                fontSize: 15,
                lineHeight: 25,
                letterSpacing: 0.5,
                opacity: 0.5,
                fontFamily: fontFamily.primary,
              }}>
              Already have an account?
            </Text>
            <Pressable>
              <Text style={styles.signInBtn}> Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    alignItems: 'center',
    marginTop: 30,

    marginHorizontal: 15,
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
  textInputContaier: {
    width: '100%',
    marginTop: 20,
    position: 'absolute',
    top: 320,
  },

  forgetPasswordTxt: {
    alignSelf: 'flex-end',
    color: colors.text,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  icon: {
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
  },
  agreeText: {
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
  continueText: {
    textAlign: 'center',
    color: colors.text,
    marginVertical: 10,
    fontSize: 15,
    opacity: 0.5,
    fontFamily: fontFamily.primary,
  },
  signInBtn: {
    color: '#13274E',
    fontFamily: fontFamily.bold,
    fontSize: 15,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
});
