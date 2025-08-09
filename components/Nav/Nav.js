import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Landing from '../../screens/LandingScreen/LandingScreen';
const Tab = createBottomTabNavigator()


function LandingWrapper(props) {
  return <Landing user={props.user} />;
}

function TabNavigation(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Landing" 
      children={() => <LandingWrapper {...props} />} />

      {/* <Tab.Screen>
      </Tab.Screen> */}
    </Tab.Navigator>
  )
}

export default TabNavigation