import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListaProfessores = () => {
  const navigation = useNavigation();

  // Exemplo de dados de professores
  const [professores, setProfessores] = useState([
    { id: '1', nome: 'Carlos', sobrenome: 'Silva', email: 'carlos@gmail.com', telefone: '21988776655', cpf: '123.456.789-01', senha: '1234' },
    { id: '2', nome: 'Ana', sobrenome: 'Oliveira', email: 'ana@gmail.com', telefone: '21999887766', cpf: '987.654.321-01', senha: 'abcd' },
    // Adicione mais professores conforme necessário
  ]);

  const handleEdit = (id) => {
    // Navegar para a tela de edição passando o ID do professor
    navigation.navigate('EditarProfessor', { professorId: id });
  };

  const handleDelete = (id) => {
    Alert.alert('Excluir', 'Você tem certeza que deseja excluir este professor?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: () => {
          setProfessores(professores.filter(professor => professor.id !== id));
          Alert.alert('Sucesso', 'Professor excluído com sucesso!');
        },
      },
    ]);
  };

  const handleBack = () => {
    navigation.navigate('MenuProfessores'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Professores</Text>
      <FlatList
        data={professores}
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
