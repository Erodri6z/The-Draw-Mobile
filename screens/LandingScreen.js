import { View, Text, Image , StyleSheet} from 'react-native'
import GradientBackground from '../components/GradientBackground'


const LandingScreen = () => {
  return (
    <GradientBackground>
    <View style={styles.wrapper}>
      <Text style={styles.title}> Welcome to The Draw</Text>
      <Image source={require('./../assets/theDrawEdit.png')} style={styles.logo} />
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
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  }
})

export default LandingScreen