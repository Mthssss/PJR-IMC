import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './SRC/Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Aplicativo IMC</Text>
      <StatusBar style="auto" />
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
