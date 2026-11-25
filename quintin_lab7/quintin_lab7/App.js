
import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function getRandomUser() {

    setLoading(true);
    setError('');

    try {

      const response = await fetch(
        'https://randomuser.me/api'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();

      setUser(data.results[0]);

    } catch (error) {

      setError('Unable to load user. Please try again.');

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <View style={styles.container}>

      {loading ? (

        <ActivityIndicator
          size="large"
          color="blue"
        />

      ) : error ? (

        <Text style={styles.error}>{error}</Text>

      ) : user ? (

        <View style={styles.userContainer}>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                user: user
              })
            }
          >

            <Image
              source={{ uri: user.picture.large }}
              style={styles.image}
            />

          </TouchableOpacity>

          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>

        </View>

      ) : null}

      <Button
        title="RANDOM USER"
        onPress={getRandomUser}
        disabled={loading}
      />

    </View>
  );
}

function ProfileScreen({ route }) {

  const user = route.params.user;

  return (
    <ScrollView style={styles.profileContainer}>

      <View style={styles.userContainer}>

        <Image
          source={{ uri: user.picture.large }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>

      </View>

      <Text style={styles.heading}>About</Text>

      <Text style={styles.info}>
        Age: {user.dob.age}
      </Text>

      <Text style={styles.info}>
        Birthday: {user.dob.date.substring(0, 10)}
      </Text>

      <Text style={styles.info}>
        Gender: {user.gender}
      </Text>

      <Text style={styles.info}>
        Nationality: {user.nat}
      </Text>

      <Text style={styles.info}>
        Address: {user.location.street.number}{' '}
        {user.location.street.name},{' '}
        {user.location.city},{' '}
        {user.location.state},{' '}
        {user.location.country}
      </Text>

      <Text style={styles.info}>
        Postcode: {user.location.postcode}
      </Text>

      <Text style={styles.heading}>Contact</Text>

      <Text style={styles.info}>
        Email: {user.email}
      </Text>

      <Text style={styles.info}>
        Phone: {user.phone}
      </Text>

      <Text style={styles.info}>
        Mobile: {user.cell}
      </Text>

      <Text style={styles.heading}>Other</Text>

      <Text style={styles.info}>
        Username: {user.login.username}
      </Text>

      <Text style={styles.info}>
        Registered: {user.registered.date.substring(0, 10)}
      </Text>

      <Text style={styles.info}>
        Membership Age: {user.registered.age} years
      </Text>

      <Text style={styles.info}>
        User ID: {user.login.uuid}
      </Text>

      <Text style={styles.heading}>Location Details</Text>

      <Text style={styles.info}>
        Latitude: {user.location.coordinates.latitude}
      </Text>

      <Text style={styles.info}>
        Longitude: {user.location.coordinates.longitude}
      </Text>

      <Text style={styles.info}>
        Timezone: {user.location.timezone.description}
      </Text>

      <Text style={styles.info}>
        UTC Offset: {user.location.timezone.offset}
      </Text>

    </ScrollView>
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
          name="Profile"
          component={ProfileScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
  },

  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F1F1',
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 15,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 5,
  },

  info: {
    fontSize: 14,
    marginBottom: 6,
  },

  error: {
    color: 'red',
    margin: 15,
    textAlign: 'center',
  },
});
