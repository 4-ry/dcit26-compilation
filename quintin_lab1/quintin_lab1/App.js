import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73BCF5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
