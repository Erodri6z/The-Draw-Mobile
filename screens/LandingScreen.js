import { View } from "react-native"
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'


const LandingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> Welcome to The Draw</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  }
})

export default LandingScreen