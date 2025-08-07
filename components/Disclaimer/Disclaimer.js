
import { Modal, Text, View, TouchableOpacity } from "react-native"

function DisclaimerModel({ onAccept }) {
  return (
    <Modal transparent={true} animationType="fade" visible={true}>
      <View>
        <View>
          <Text>
            DisclaimerModel
          </Text>
          <Text>
            This tarot reading app is intended for entertainment, reflection, and personal insight purposes only. The information provided through tarot card readings should not be considered medical, legal, financial, or professional advice. This app uses artificial intelligence powered by OpenAI to generate interpretations and messages. These are created automatically and are not written or reviewed by a human. By using this app, you agree that you are solely responsible for how you interpret and act on any reading. The creators of this app are not liable for any decisions, outcomes, or emotional responses resulting from use.If you're facing serious emotional, medical, or legal concerns, please consult a qualified professional.
          </Text>
          <TouchableOpacity>
            <Text>I Understand</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default DisclaimerModel