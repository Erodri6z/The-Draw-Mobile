import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Landing from '../../screens/LandingScreen/LandingScreen';
import { View } from 'react-native';
const Tab = createBottomTabNavigator()


function LandingWrapper(props) {
  return <Landing user={props.user} />;
}

function TabNavigation(props) {
  return (
    <View >
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Landing" 
        children={() => <LandingWrapper {...props} />} />

        {/* <Tab.Screen>
        </Tab.Screen> */}
      </Tab.Navigator>
    </View>
  )
}

export default TabNavigation