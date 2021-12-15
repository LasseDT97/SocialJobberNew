import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreenCompany from "./screens/LoginScreenCompany";
import LoginScreenSocialJobber from "./screens/LoginScreenSocialJobber";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AddNewJobScreen from "./screens/AddNewJobScreen";
import JobScreen from "./screens/JobScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {

    const Stack = createStackNavigator();
    const globalScreenOptions = {
        headerStyle: { backgroundColor: '#2C6BED' },
        headerTitleStyle: { color: 'white'},
        headerTintColor: 'white'
    };

  return (
          <NavigationContainer>
                  <Stack.Navigator
                      style={styles.container}
                      initialRouteName="Velkommen"
                      screenOptions={globalScreenOptions}
                  >
                      <Stack.Screen name='Velkommen' component={WelcomeScreen} />
                      <Stack.Screen name='Velkommen SocialJobber' component={LoginScreenSocialJobber} />
                      <Stack.Screen name='Velkommen virksomhed' component={LoginScreenCompany} />
                      <Stack.Screen name='Opret bruger' component={RegisterScreen} />
                      <Stack.Screen name='Home' component={HomeScreen} />
                      <Stack.Screen name='Tilføj job' component={AddNewJobScreen} />
                      <Stack.Screen name='Job' component={JobScreen} />
                      <Stack.Screen name='Profil' component={ProfileScreen} />
                      <Stack.Screen name='Map' component={MapScreen} />
                  </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
