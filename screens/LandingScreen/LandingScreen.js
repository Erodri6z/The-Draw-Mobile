import { View, Text, Image } from 'react-native'
import DisclaimerModal from '../../components/Disclaimer/Disclaimer'
import GradientBackground from '../../components/GradientBackground/GradientBackground'
import styles from './Styles'
import { useState } from 'react'


const LandingScreen = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
  return (
    <GradientBackground>
      <View style={styles.wrapper}>
      {!disclaimerAccepted && (
        <DisclaimerModal onAccept={() => setDisclaimerAccepted(true)} />
      )}

      {disclaimerAccepted && (
      <View style={styles.wrapper}> 
        <Text style={styles.title}> Welcome to The Draw</Text>
        <Image source={require(`../../assets/theDrawEdit.png`)} style={styles.logo} />
        <Text style={styles.text}> When you draw three cards at random, you give the universe a chance to speak. Unfiltered, untampered, and just for you.</Text>
      </View>
    )}
    </View>
    </GradientBackground>
  )
}


export default LandingScreen