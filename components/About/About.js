
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

function About() {
  return (
    <ScrollView style={styles.about}>
      <View style={styles.section}>
        <Text style={styles.mainTitle}>The Draw</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          What are tarot cards
        </Text>
        <Text style={styles.text}>
          Section One 
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          Explination
        </Text>
        <Text style={styles.text}>
          Section 2
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          There is no rules, it's just an invitation
        </Text>
        <Text style={styles.text}>
          Section 3
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          Best Practice :
        </Text>
        <Text style={styles.text}>
          Section 4
        </Text>
      </View>
    </ScrollView>
  )
}

export default About