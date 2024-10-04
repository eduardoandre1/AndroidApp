import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Image, Button } from 'react-native';

export default function Login() {
  function SendLogin( username, password)
  {
  	
  }
	return (
	<ImageBackground source={require('./assets/view-gym-room-training-sports.jpg')} style={styles.imagfundo}>
	  <View style={styles.container}>
		<Image source={require('./assets/musculo2.jpg')} style={styles.logo} />
		<Text style={styles.titulo}>FAÇA SEU LOGIN</Text>
		<View style={styles.formContainer}>
		  <Text style={styles.label}>
			<Image source={require('./assets/peso-pesado1.jpg')} style={styles.icon} />
			E-MAIL: testes22222
		  </Text>
		  <TextInput style={styles.input} placeholder="Digite seu e-mail" />
		  <Text style={styles.label}>
			<Image source={require('./assets/cadeado1.jpg')} style={styles.icon} />
			SENHA:
		  </Text>
		  <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
		  <Pressable
			style={styles.button}

		  >
			<Button style={styles.buttonText} onPress={alert('testdfdfse')}>Entrar</Button>
		  </Pressable>
		</View>
	  </View>
	</ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagfundo: {
	flex: 1,
	resizeMode: 'cover',
	justifyContent: 'center',
  },
  container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
  },
  logo: {
	width: 100,
	height: 100,
	marginBottom: 20,
  },
  titulo: {
	fontSize: 30,
	fontWeight: 'bold',
	color: '#fff',
	marginBottom: 20,
  },
  formContainer: {
	width: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	padding: 20,
	borderRadius: 10,
	maxWidth: '600px'
  },
  label: {
	fontSize: 16,
	color: '#fff',
	marginBottom: 5,
	flexDirection: 'row',
	alignItems: 'center',
  },
  icon: {
	width: 20,
	height: 20,
	marginRight: 10,
  },
  input: {
	height: 40,
	borderColor: 'gray',
	borderWidth: 1,
	marginBottom: 15,
	paddingHorizontal: 10,
	borderRadius: 5,
	color: '#fff',
  },
  button: {
	backgroundColor: '#faa',
	padding: 10,
	borderRadius: 5,
	alignItems: 'center',
  },
  buttonText: {
	color: '#000',
	fontSize: 16,
	fontWeight: 'bold',
  },
});
