
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

function About() {
  return (
    <ScrollView>
      <View >
        <Text>The Draw</Text>
      </View>
      <View>
        <Text>
          What are tarot cards
        </Text>
        <Text>
          Section One 
        </Text>
      </View>
      <View>
        <Text>
          Explination
        </Text>
        <Text>
          Section 2
        </Text>
      </View>
      <View>
        <Text>
          There is no rules, it's just an invitation
        </Text>
        <Text>
          Section 3
        </Text>
      </View>
      <View>
        <Text>
          Best Practice :
        </Text>
        <Text>
          Section 4
        </Text>
      </View>
    </ScrollView>
  )
}

export default About