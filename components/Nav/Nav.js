import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Landing from '../../screens/LandingScreen/LandingScreen';
import { View } from 'react-native'
import styles from './Styles'
const Tab = createBottomTabNavigator()



function LandingWrapper(props) {
  return <Landing user={props.user} />;
}

function TabNavigation(props) {
  return (
    <View style={styles.nav}>
      <Tab.Navigator screenOptions={{ 
        headerShown: false, 
        tabBarStyle: styles.tabBar, 
        }} >
        <Tab.Screen name="Landing" 
        children={() => <LandingWrapper {...props} />} />

        {/* <Tab.Screen>
        </Tab.Screen> */}
      </Tab.Navigator>
    </View>
  )
}

export default TabNavigation