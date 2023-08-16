import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Home />

{/* <Signup/> */}
{/* <Login/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 95%)',
    alignItems: 'center',
    paddingTop: 35,
    height: '100%'

  },
});
