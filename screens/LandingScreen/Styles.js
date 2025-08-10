import { StyleSheet } from 'react-native'

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
    shadowColor: 'rgb(255, 255, 255)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10, 
    elevation: 8,
  },
  text:{
    color: "white",
    textAlign:"center"
  },
  button:{
    backgroundColor: "rgb(234, 0, 255)",   padding: 10,
    margin: 20,
    borderRadius: 5,
    color: "rgb(255, 255, 255)"
  }
});

export default styles
