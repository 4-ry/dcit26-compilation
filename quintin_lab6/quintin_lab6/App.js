
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const products = [
  {
    key: '1',
    title: 'Xbox',
    description: 'A gaming console developed by Microsoft.',
    rating: '5/5',
  },
  {
    key: '2',
    title: 'PS5',
    description: 'A gaming console developed by Sony.',
    rating: '4.9/5',
  },
  {
    key: '3',
    title: 'Nintendo Switch',
    description: 'A hybrid handheld and home gaming console.',
    rating: '4.7/5',
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <FlatList
        data={products}
        keyExtractor={(item) => item.key}

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productItem}
            onPress={() =>
              navigation.navigate('Product', {
                product: item
              })
            }
          >
            <Text style={styles.itemText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

function ProductScreen({ route }) {

  const product = route.params.product;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.info}>
        Rating: {product.rating}
      </Text>

      <Text style={styles.info}>
        Description: {product.description}
      </Text>

      <Text style={styles.info}>
        Key: {product.key}
      </Text>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Product"
          component={ProductScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F1F1F1',
  },

  productItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginBottom: 8,
    backgroundColor: 'white',
  },

  itemText: {
    fontSize: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});
