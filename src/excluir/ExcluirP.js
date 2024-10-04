import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Excluir() {
  const navigation = useNavigation();
  const [confirmacao, setConfirmacao] = useState('');

  const handleExclusao = () => {
    if (confirmacao.toLowerCase() === 'excluir') {
      Alert.alert('Exclusão confirmada', 'Os dados foram excluídos com sucesso.');
      
      navigation.goBack(); 
    } else {
      Alert.alert('Erro', 'Digite o nome para confirmar a exclusão.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/kettlebell-fitness-still-life.jpg')} style={styles.imagfundo}>
      <View style={styles.overlay}>
        <Text style={styles.titulo}>EXCLUIR PROFESSORES 1</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>DIGITE "O NOME DO PROFESSO" PARA CONFIRMAR:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite aqui" 
            onChangeText={setConfirmacao} 
          />
          <Pressable style={styles.button} onPress={handleExclusao}>
            <Text style={styles.buttonText}>Confirmar</Text>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
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
    backgroundColor: '#f00', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
