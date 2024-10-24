import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListaAlunos = () => {
	const navigation = useNavigation();

	
	const [alunos, setAlunos] = useState([
		{ id: '1', nome: 'Gabriel', sobrenome: 'Dias', email: 'gabriel@gmail.com', telefone: '21980437767', cpf: '123.456.789-00', senha: '1' },
		{ id: '2', nome: 'Maria', sobrenome: 'Silva', email: 'maria@gmail.com', telefone: '21987654321', cpf: '987.654.321-00', senha: '2' },
		
	]);

	const handleEdit = (id) => {
		
		navigation.navigate('EditarAluno', { alunoId: id });
	};

	const handleDelete = (id) => {
		Alert.alert('Excluir', 'Você tem certeza que deseja excluir este aluno?', [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Excluir',
				onPress: () => {
					setAlunos(alunos.filter(aluno => aluno.id !== id));
					Alert.alert('Sucesso', 'Aluno excluído com sucesso!');
				},
			},
		]);
	};

	const handleBack = () => {
		navigation.navigate('MenuProfessores'); 
	};

	return (
		<ImageBackground source={require('../../assets/view-gym-room-training-sports.jpg')} style={styles.imagfundo}>
				<View style={styles.container}>
				<Text style={styles.title}>Lista de Alunos</Text>
				<FlatList
						data={alunos}
						keyExtractor={item => item.id}
						renderItem={({ item }) => (
						<View style={styles.item}>
								<Text style={styles.itemText}>{item.nome} {item.sobrenome}</Text>
								<Text style={styles.itemText}>{item.email}</Text>
								<Text style={styles.itemText}>{item.telefone}</Text>
								<Text style={styles.itemText}>{item.cpf}</Text>
								<Text style={styles.itemText}>{item.senha}</Text>
								<View style={styles.buttonContainer}>
								<Pressable style={styles.button} onPress={() => handleEdit(item.id)}>
										<Text style={styles.buttonText}>Editar</Text>
								</Pressable>
								<Pressable style={styles.button} onPress={() => handleDelete(item.id)}>
										<Text style={styles.buttonText}>Excluir</Text>
								</Pressable>
								</View>
						</View>
						)}
				/>
				<Pressable style={styles.backButton} onPress={handleBack}>
						<Text style={styles.buttonText}>Voltar</Text>
				</Pressable>
				</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
		imagfundo: {
				flex: 1,
				resizeMode: 'cover',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
			},
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	item: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	itemText: {
		fontSize: 16,
		color: '#000',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	button: {
		backgroundColor: '#faa',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginHorizontal: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#000',
		fontWeight: 'bold',
	},
	backButton: {
		backgroundColor: '#faa',
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
		alignItems: 'center',
	},
});

export default ListaAlunos;

