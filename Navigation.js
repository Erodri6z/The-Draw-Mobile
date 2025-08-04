// Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './screens/LandingScreen';


const Stack = createNativeStackNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing">
          {() => <Landing user={props.user} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}