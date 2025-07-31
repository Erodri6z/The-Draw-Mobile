import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initualRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
