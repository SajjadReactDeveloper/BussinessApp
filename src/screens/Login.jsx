import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

// Importing Components
import TextField from '../components/TextField';
import Button from '../components/Button';
import Logo from '../components/Logo';

//Import Icon
import GoogleIcon from '../components/GoogleIcon';
import AppleIcon from '../components/AppleIcon';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.signintxt}>Sign In</Text>
        <Logo />
        <View style={styles.textInputContaier}>
          <TextField placeholder="Email" label="Email" />
          <TextField
            placeholder="Password"
            label="Password"
            secureTextEntry={true}
          />

          <Pressable onPress={() => {}}>
            <Text style={styles.forgetPasswordTxt}>Forget Password?</Text>
          </Pressable>

          <Button
            text={'Login'}
            onPressHandler={() => {}}
            styleHandler={{marginVertical: 10}}
          />

          <Text style = {{ textAlign: 'center', color: colors.text }}>Or login with</Text>
          <View style={styles.iconContainer}>
            <GoogleIcon />
            <AppleIcon />
          </View>
          <View style = {{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
          <Text style = {{ textAlign: 'center', color: colors.text, fontSize: 17 }}>Don’t have any account?</Text>
          <Pressable>
            <Text style = {{ color: 'black', fontWeight: '900', fontSize: 17 }}> Sign Up</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    fontSize: 36,
  },
  textInputContaier: {
    width: '100%',
    marginTop: 20,
  },

  forgetPasswordTxt: {
    alignSelf: 'flex-end',
    color: colors.text,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  icon: {
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10
  },
});
