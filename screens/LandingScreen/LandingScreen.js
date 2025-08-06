import { View, Text, Image , StyleSheet} from 'react-native'
import GradientBackground from '../../components/GradientBackground/GradientBackground'
import styles  from './Styles'


const LandingScreen = () => {
  return (
    <GradientBackground>
    <View style={styles.wrapper}>
      <Text style={styles.title}> Welcome to The Draw</Text>
      <Image source={require('./../assets/theDrawEdit.png')} style={styles.logo} />
      <Text style={styles.text}> When you draw three cards at random, you give the universe a chance to speak. Unfiltered, untampered, and just for you.</Text>
    </View>
    </GradientBackground>
  )
}


export default LandingScreen