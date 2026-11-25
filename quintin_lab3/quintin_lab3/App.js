import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {

  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    if (item.trim() !== '') {
      setItems([...items, item.trim()]);
      setItem('');
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={item}
          onChangeText={setItem}
        />

        <Button
          title="ADD"
          onPress={addItem}
        />

      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
  },

  listItem: {
    backgroundColor: '#E1E5E9',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },

  itemText: {
    fontSize: 16,
    color: '#263746',
  },
});