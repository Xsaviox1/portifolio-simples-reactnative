import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { Link } from 'expo-router';


export default function parte2() {

  const [fonteLoaded] = useFonts({
    Roboto_100Thin
  })

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imagemEu} source={require('../th (1).jpg')} />
      <Text style={styles.nome}>Olá, seja bem vindo!</Text>
      <Text style={styles.nome}>Conheça mais sobre o meu trabalho e não esqueça de deixar uma mensagem de contato ;)</Text>
      <StatusBar style="auto" />
      <Link href="/parte3" style={styles.link}><Image style={styles.imagemLink} source={require('../divisa-direita.png')} /></Link>
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
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Roboto_100Thin',
    textAlign:'center'
  },
  imagemEu: {
    width: 200,
    height: 200,
    borderRadius: 100, // metade da largura e altura para fazer um círculo
    borderWidth: 1, // largura da borda
    borderColor: 'white', // cor da borda
    marginBottom:10
  },
  link: {
    alignSelf: 'center',
    paddingBottom: '10%',
    marginTop:10
  },imagemLink: {
    width: 40,
    height: 40,
    marginBottom: 20,
  }

});
