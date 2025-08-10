import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './screens/LandingScreen/LandingScreen'
import TabNavigation from './components/Nav/Nav'

const Stack = createNativeStackNavigator()

function LandingWrapper(props) {
  return <Landing user={props.user} />
}

function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" children={() => <TabNavigation {...props} />} />
        <Stack.Screen name="Landing" children={() => <LandingWrapper {...props} />} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default Navigation 