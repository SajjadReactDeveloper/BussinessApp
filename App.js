import {StyleSheet, StatusBar, Pressable} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import RegisterProfile from './src/screens/RegisterProfile';
import Swipe from './src/screens/Swipe';
import SplashScreen from './src/screens/SplashScreen';
import Mode from './src/screens/Mode';
import Settings from './src/screens/Settings';

import routes from './src/constants/routes';

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar
        animated={true}
        barStyle = "dark-content"
        backgroundColor="#FFF" />
      <Stack.Navigator>
      <Stack.Screen name="Setting" component={Settings} options={{ 
          headerRight: () => (
            <Pressable>
              <Text>Cancel</Text>
            </Pressable>
          )
         }}/>
      <Stack.Screen name="Mode" component={Mode} options={{ 
          headerShown: false,
         }}/>
      <Stack.Screen name="Main" component={SplashScreen} options={{ 
          headerShown: false,
         }}/>
      <Stack.Screen name={routes.mainFlow.SplashScreen} component={Swipe} options={{ 
          headerShown: false,
         }}/>
      <Stack.Screen name={routes.authenticationFlow.registerProfileScreen} component={RegisterProfile} options={{ 
          headerShown: false,
         }}/>
        {/* <Stack.Screen name={routes.authenticationFlow.loginScreen} component={Login} options={{ 
          headerShown: false,
         }}/> */}
        <Stack.Screen name={routes.authenticationFlow.registerEmailScreen} component={Signup} options={{ 
          headerShown: false,
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
