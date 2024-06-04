import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { Link } from 'expo-router';

export default function App() {
  
  const [fonteLoaded] = useFonts({
    Roboto_100Thin
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    
    <View style={styles.container}>
      
      <Image style={styles.imagem} source={require('../JS.png')} />
      <Text style={styles.nome}>JOSÉ SÁVIO</Text>
      <Text style={styles.nome}>Full Stack Developer</Text>
      <StatusBar style="auto" />
      <Link href="/parte2" style={styles.link}><Image style={styles.imagemLink} source={require('../divisa-direita.png')} /></Link>
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
  nome: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Roboto_100Thin',
  },
  imagemLink: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  link: {
    alignSelf: 'center',
    paddingBottom: '10%',
    marginTop:10
  }
});
