import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { Link } from 'expo-router';


export default function Curriculo() {

  const [fonteLoaded] = useFonts({
    Roboto_100Thin
  })

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.texto}>saviorec1@gmail.com</Text>
      <Text style={styles.texto}>linkedin.com/in/saviogomes</Text>
      <Text style={styles.texto}>github.com/Xsaviox1</Text>
      <Text style={styles.texto}>Recife - PE</Text>

      <Text style={styles.titulo}>Perfil profissional</Text>
      <Text style={styles.textoPerfil}>Desenvolvedor experiente em criação de websites e aplicações
mobile, especializado em tecnologias como React Native, MongoDB,
MySQL e Node.js. Possuo experiência em manipulação de datasets e
criação de dashboards com PowerBI. Com habilidades no
desenvolvimento front-end e back-end, busco entregar soluções
        eficientes e escaláveis para clientes e projetos variados</Text>
      
      <Text style={styles.titulo}>Experiencia Profissional</Text>
      <Text style={styles.subTitulo}>Porto Digital / A3Data</Text>
      <Text style={styles.textoPerfil}>Residencia em dados - 2023.1 até o momento</Text>
      <Text style={styles.textoPerfil}>Análise e tratamento de dados em grandes datasets.</Text>
      <Text style={styles.textoPerfil}>Extração de insights com Python.</Text>
      <Text style={styles.textoPerfil}>Criação de Dashboards com PowerBI.</Text>
        
      
      <Text style={styles.subTitulo}>Apé Startup</Text>
      <Text style={styles.textoPerfil}>Desenvolvedor Full Stack 2024.1 até o momento</Text>
      <Text style={styles.textoPerfil}>Criação de telas para websites e aplicações mobile.</Text>
      <Text style={styles.textoPerfil}>Desenvolvimento de banco de dados e implementação de backend.</Text>
      <Text style={styles.textoPerfil}>Integração de APIs para acesso a dados e serviços externos.</Text>
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#546E89',
    alignItems: 'center'
  },
  titulo: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 20,
    marginBottom:10
  },
  texto: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '100'
  },
  textoPerfil: {
    color: '#fff',
    fontSize: 13,
    width: 320,
    textAlign: 'center',
    fontWeight: '100'
  },
  subTitulo: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 15,
    marginTop: 20,
    marginBottom:10
  },
  textoA3: {
    color: '#fff',
    fontSize: 13,
    width: 320,
    textAlign: 'center',
    fontWeight: '100'
  }
  

});
