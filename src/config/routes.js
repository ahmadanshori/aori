import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ContactScreen from '@/screens/home/ContactScreen';
import ContactUpdateScreen from '@/screens/home/ContactUpdateScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={ContactScreen} name="Contact" />
        <Stack.Screen component={ContactUpdateScreen} name="UpdateScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
