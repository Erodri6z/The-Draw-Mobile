import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  overlay:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modal:{
    backgroundColor:'rgb(31, 6, 40)',
    shadow: "rgb(230, 0, 255)",
    shadowOffset: {
      width:20,
      height:20
    },
    shadowRadius:3.84,
    padding: 25,
    borderRadius: 12,
    margin: 20,
    maxWidth: 300,
    elevation: 10,
  },
  title:{
    fontSize: 25,
    fontWeight: 900,
    textAlign: "left",
    padding: 5,
    color: 'white'
  },
  text:{
    fontSize: 15,
    color: 'white'
  },
  button:{
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgb(234, 0, 255)",
    maxWidth: 100,
    borderRadius: 10,
  }
})

export default styles