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
        <Tab.Screen name="Landing" options={{ tabBarLabelStyle:styles.navItem }}
        children={() => <LandingWrapper {...props} />} />
        <Tab.Screen name="About" options={{ tabBarLabelStyle:styles.navItem }}
        children={() => <LandingWrapper {...props} />} />
        <Tab.Screen name="Login" options={{ tabBarLabelStyle:styles.navItem }}
        children={() => <LandingWrapper {...props} />} />
        <Tab.Screen name="Sign Up" options={{ tabBarLabelStyle:styles.navItem }}
        children={() => <LandingWrapper {...props} />} />
        <Tab.Screen name="Logout" options={{ tabBarLabelStyle:styles.navItem }}
        children={() => <LandingWrapper {...props} />} />
      </Tab.Navigator>
    </View>
  )
}

export default TabNavigation