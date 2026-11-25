import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.info}>Ryeron Phillip B. Quintin</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.info}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.info}>
        BS Computer Science - Year/Section
      </Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.info}>
        I am a Computer Science student interested in
        technology, programming, and software development.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.info}>
        {'\u2022'} N/A
      </Text>
      <Text style={styles.info}>
        {'\u2022'} CodEd Align: A Teacher Scheduling and Coordination System (2026)
      </Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.info}>{'\u2022'} Java</Text>
      <Text style={styles.info}>{'\u2022'} JavaScript</Text>
      <Text style={styles.info}>{'\u2022'} Web Development</Text>
      <Text style={styles.info}>{'\u2022'} PHP</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F7',
    padding: 20,
    paddingTop: 45,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

  info: {
    fontSize: 14,
    marginTop: 4,
    color: '#333333',
  },
});
