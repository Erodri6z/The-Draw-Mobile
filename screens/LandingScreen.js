import { View, Text, StyleSheet} from 'react-native'
import GradientBackground from '../components/GradientBackground'


const LandingScreen = () => {
  return (
    <GradientBackground>
    <View style={styles.wrapper}>
      <Text style={styles.title}> Welcome to The Draw</Text>
    </View>
    </GradientBackground>
  )
}


const styles = StyleSheet.create({
    wrapper: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  }
})

export default LandingScreen