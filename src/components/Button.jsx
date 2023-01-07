import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';

const Button = ({text, onPressHandler, styleHandler}) => {
  return (
    <LinearGradient
      colors={[colors.card.colorOne, colors.card.colorTwo]}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      style={{ ...styles.linearGradient, ...styleHandler }}>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({

    linearGradient:{
        padding: 15,
        borderRadius: 50,
        alignItems: "center"
    },

    buttonText:{
        fontSize: 18,
        fontWeight: "bold",
    }
});
