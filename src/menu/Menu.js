import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Menu() {
 
	const navigation = useNavigation();

	const navigateToCadastroAlunos = () => {
		navigation.navigate('CadastroAlunos');
	};
	const navigateToCadastroProfessores= () => {
		navigation.navigate('CadastroProfessores');
	};
	const navigateToExcluirA= () => {
		navigation.navigate('ExcluirA');
	};
	const navigateToExcluirP= () => {
		navigation.navigate('ExcluirP');
	};
		return (
				<ImageBackground source={require('../../assets/kettlebell-fitness-still-life.jpg')} style={styles.imagfundo}>
						<View style={styles.overlay}>
								<Text style={styles.welcomeText}>Estilo Fitness </Text>
								<View style={styles.gridContainer}>
										<View style={styles.column}>
											<Text style={styles.text}>ALUNOS </Text>
												<Pressable style={styles.button}  onPress={navigateToCadastroAlunos}>
														<Image source={require('../../assets/local-na-rede-internet.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/engrenagem.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button} onPress={navigateToExcluirA}>
														<Image source={require('../../assets/botao-x.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/prancheta.png')} style={styles.imag} />
												</Pressable>
										</View>
										<View style={styles.column}>
										<Text style={styles.text}>PROFESSORES </Text>
												<Pressable style={styles.button} onPress={navigateToCadastroProfessores}>
														<Image source={require('../../assets/local-na-rede-internet.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button} >
														<Image source={require('../../assets/engrenagem.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button} onPress={navigateToExcluirP}>
														<Image source={require('../../assets/botao-x.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/prancheta.png')} style={styles.imag} />
												</Pressable>
										</View>
										<View style={styles.column}>
										<Text style={styles.text}>ACADEMIA </Text>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/supino.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/sentido-horario.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/fluxo-de-caixa.png')} style={styles.imag} />
												</Pressable>
												<Pressable style={styles.button}>
														<Image source={require('../../assets/sair.png')} style={styles.imag} />
												</Pressable>
										</View>
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
			alignItems: 'center',
		},
		overlay: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			padding: 10,
			backgroundColor: 'rgba(0, 0, 0, 0.5)', 
		},
		welcomeText: {
			fontSize: 24,
			color: '#fff', 
			fontWeight: 'bold',
			textAlign: 'center',
			marginBottom: 20, 
			textTransform: 'uppercase',
		},
		text: {
			fontSize: 16,
			fontWeight: 'bold',
			color: '#fff',
			textTransform: 'uppercase',
			marginVertical: 10,
		},
		gridContainer: {
			flexDirection: 'row', 
			justifyContent: 'space-around', 
			alignItems: 'flex-start', 
			flexWrap: 'wrap', 
			width: '100%',
			padding: 10,
			gap:'3dvw',
		},
		column: {
			width: '30%', 
			alignItems: 'center', 
			marginVertical: 10, 
		},
		button: {
			backgroundColor: '#4CAF50', // Cor de fundo verde
			padding: 15, 
			borderRadius: 10, 
			marginVertical: 10, 
			alignItems: 'center',
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.8,
			shadowRadius: 2,
		},
		imag: {
			width: '15dvw', 
			height: '15dvw',
		},
	});