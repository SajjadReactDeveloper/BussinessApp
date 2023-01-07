import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// COMPONENTS
import colors from '../constants/colors';
import fontFamily from '../constants/fontFamily';

// COMPONENT
import Logo from '../components/Logo';
import Button from '../components/Button';

const Swipe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.signintxt}>
          Before you <Text style={{color: colors.primary}}>Swipe</Text>
        </Text>
        <Logo />
        <View style={styles.mainContainer}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fontFamily.secondary,
              marginTop: 25,
              marginHorizontal: 15,
            }}>
            Welcome! We’re happy to be part of your Hashi Journey.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fontFamily.secondary,
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            Here we treat everyone with kindness and respect, no matter their
            race, religion , nationality , ethinicity , skin color ability ,
            size , sex , or gender identity.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fontFamily.secondary,
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            Before you Swipe Invester Welcome! We’re happy to be part of your
            Hashi Journey. Here we treat everyone with kindness and respect, no
            matter their race, religion , nationality , ethinicity , skin color
            ability , size , sex , or gender identity. In order to keep our
            privacy & your privacy follow our guidelines Next
          </Text>
          <Button
            text="Next"
            onPressHandler={() => {}}
            styleHandler={{marginVertical: 10, color: 'white', marginTop: 40, marginHorizontal: 15}}
          />
        </View>
      </View>
    </View>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    alignItems: 'center',
    marginTop: 30,
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
  mainContainer: {
    width: '100%',
    backgroundColor: colors.card.colorOne,
    marginHorizontal: 15,
    marginTop: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '100%',
    fontSize: 27,
  },
});
