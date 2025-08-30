import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './screens/LandingScreen/LandingScreen'
import TabNavigation from './components/Nav/Nav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator()

function LandingWrapper(props) {
  return <Landing user={props.user} />
}

function Navigation(props) {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" children={() => <TabNavigation {...props} />} />
          <Stack.Screen name="Landing" children={() => <LandingWrapper {...props} />} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}



export default Navigation 