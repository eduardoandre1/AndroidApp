import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit'; 
import { ScrollView } from 'react-native'; 

const { width: dvw, height: dvh } = Dimensions.get('window');

const MenuProfessores = () => {
	const navigation = useNavigation();

	const handleLogout = () => {
		Alert.alert('Logout', 'Você saiu da conta.');
		navigation.navigate('Login');
	};

	return (
		<ImageBackground source={require('../../assets/kettlebell-fitness-still-life.jpg')} style={styles.imagfundo} >

			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Menu Professores</Text>
				
				
				<Pressable style={styles.button} onPress={() => navigation.navigate('CadastroAlunos')}>
					<Text style={styles.buttonText}>Cadastro de Alunos</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('ListaAlunos')}>
					<Text style={styles.buttonText}>Lista de Alunos</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('CadastroProfessores')}>
					<Text style={styles.buttonText}>Cadastro de Professores</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('ListaProfessores')}>
					<Text style={styles.buttonText}>Lista de Professores</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={handleLogout}>
					<Text style={styles.buttonText}>Sair</Text>
				</Pressable>
			</ScrollView>
			</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imagfundo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: '5dvw',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		width: '100%',
		height: '100%',
	},
	title: {
		fontSize: dvw * 0.08,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: dvh * 0.03,
	},
	chart: {
		marginBottom: dvh * 0.03,
	},
	button: {
		backgroundColor: '#faa',
		padding: dvh * 0.02,
		borderRadius: 8,
		marginBottom: dvh * 0.02,
		width: '80%',
		alignItems: 'center',
	},
	buttonText: {
		color: '#000',
		fontSize: dvw * 0.05,
		fontWeight: 'bold',
	},
});

export default MenuProfessores;
