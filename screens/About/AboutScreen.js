import { ScrollView } from "react-native-gesture-handler"
import About from "../../components/About/About"
import GradientBackground from "../../components/GradientBackground/GradientBackground"

const AboutScreen = () => {
  return (
    <GradientBackground>
      <About />
    </GradientBackground>
  )
}

export default AboutScreen