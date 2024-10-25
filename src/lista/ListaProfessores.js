import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ListaProfessores = () => {
	const navigation = useNavigation();
	
	const [professorList,setProfessores] = useState([{}])
	
	const [atualizar,setAtulaizar] = useState (false)
	
	const handleEdit = (id) => {
		// Navegar para a tela de edição passando o ID do professor
		navigation.navigate('EditarProfessor', { professorId: id });
	};

	const handleDelete = (cpf) => {
		console.log(cpf)
		Alert.alert('Excluir', 'Você tem certeza que deseja excluir este professor?', [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Excluir',
				onPress: () => {
					console.log(cpf)
					axios.post('https://strongacademiaapi.onrender.com/delete/professores',{cpf:cpf})
					.then((response) => {setAtulaizar(!atualizar)})
					.catch((error)=> Alert.alert("não foi possivel executar esta função no Momento"))
				},
			},
		])
		;
		console.log(cpf)
		axios.post('https://strongacademiaapi.onrender.com/delete/professores',{cpf:cpf})
		.then((response) => {setAtulaizar(!atualizar)})
		.catch((error)=>{Alert.alert("não foi possivel executar esta função no Momento");console.log(error)})
	};

	const handleBack = () => {
		navigation.navigate('MenuProfessores'); 
	};
	useEffect(()=>
		{
			axios.get('https://strongacademiaapi.onrender.com/professores').then((response)=>{setProfessores(response.data)})
		},[atualizar])
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lista de Professores</Text>
			<FlatList
				data={professorList}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemText}>Nome: {item.nome} {item.sobrenome}</Text>
						<Text style={styles.itemText}>Email:{item.email}</Text>
						<Text style={styles.itemText}>tel: {item.telefone}</Text>
						<Text style={styles.itemText}>cpf: {item.cpf}</Text>
						<View style={styles.buttonContainer}>
							<Pressable style={styles.button} onPress={() => handleEdit(item.id)}>
								<Text style={styles.buttonText}>Editar</Text>
							</Pressable>
							<Pressable style={styles.button} onPress={() => {handleDelete(item.cpf)}}>
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
	);
};

const styles = StyleSheet.create({
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

export default ListaProfessores;
