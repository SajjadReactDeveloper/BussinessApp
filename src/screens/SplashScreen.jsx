import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import fontFamily from '../constants/fontFamily'

const SplashScreen = () => {
  return (
    <View style = {styles.container}>
        <Image source={require('../../assets/image.jpg')} style = {{ width: '100%', height: 630, resizeMode: "cover" }} />
        <Image source={require('../../assets/return.png')} style = {{ position: 'absolute', left: '6.4%', top: '5.6%' }} />
        <Image source={require('../../assets/redo.png')} style = {{ position: 'absolute', left: '87.96%', top: '5.6%', right: '0.72%' }} />
        <View style = {styles.main}>
            <Text style = {styles.text}>Beginner</Text>
        </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      main: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        top: 600,
        backgroundColor: 'white',
        width: '100%',
        height: 280,
        // opacity: 0.8
      },
      text: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 35,
        color: 'black',
        alignItems: 'center',
        fontFamily: fontFamily.bold,
      }
})