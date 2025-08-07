import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  overlay:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modal:{
    backgroundColor:'#fff',
    padding:25,
    borderRadius:10,
    margin:20,
    maxWidth:300,
  }
})

export default styles