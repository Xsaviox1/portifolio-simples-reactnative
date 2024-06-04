import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import Curriculo from './Curriculo';
import Projetos from './projetos';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [fonteLoaded] = useFonts({
    Roboto_100Thin
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Curriculo')}>
        <Text style={styles.textoBotao}>Curriculo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#546E89',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 250,
    height: 70,
    backgroundColor: '#27358A',
    padding: 10,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Roboto_100Thin'
  }
});

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='false'>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Curriculo"  component={Curriculo} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <AppNavigator />
    
  );
}
