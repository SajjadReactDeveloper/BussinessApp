import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Import Components
import Logo from '../components/Logo';
import Checkbox from '../components/Checkbox';
import fontFamily from '../constants/fontFamily';
import Button from '../components/Button';

const Mode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.signintxt}>
          Choose a <Text style={{color: colors.primary}}>mode</Text> to get
          started
        </Text>
        <Logo />
        <View
          style={{
            marginVertical: 15,
            marginTop: 60,
          }}>
          <Checkbox
            label="Person that allocates capital with the expectation of a future financial return or a buyer."
            text="Invester"
          />
          <Checkbox
            label="Is the legal proprieter of a Business looking to sell or finance it."
            text="Business Owner"
          />
          <Checkbox
            label="Person looking to partner with anyone on a project or an existent business."
            text="Partnership"
          />
          <Checkbox
            label="Individual who has a new business idea and don’t know how to assemble his idea."
            text="Beginner"
          />
          <Button
            text={'Next'}
            onPressHandler={() => {}}
            styleHandler={{marginVertical: 10, marginHorizontal: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default Mode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    alignItems: 'center',
    marginTop: 20,
  },
  signintxt: {
    color: colors.text,
    fontSize: 25,
    fontFamily: fontFamily.semiBold,
    top: 10,
    fontWeight: '600',
    letterSpacing: -0.928786,
  },
});
