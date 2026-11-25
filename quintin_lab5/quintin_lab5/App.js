import 'react-native-gesture-handler';

import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="PROFILE"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="GO BACK HOME"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="GO BACK"
        onPress={() => navigation.getParent().navigate('Home')}
      />
    </View>
  );
}

function MenuButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text style={styles.menu}>☰</Text>
    </TouchableOpacity>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MenuButton navigation={navigation} />
          )
        })}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MenuButton navigation={navigation} />
          )
        })}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>

        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
        >

          <Drawer.Screen
            name="Home"
            component={HomeStack}
          />

          <Drawer.Screen
            name="About"
            component={AboutStack}
          />

        </Drawer.Navigator>

      </NavigationContainer>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },

  menu: {
    fontSize: 24,
    marginRight: 15,
  },
});
