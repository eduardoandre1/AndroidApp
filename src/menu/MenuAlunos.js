import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const { width: dvw, height: dvh } = Dimensions.get('window');

const MenuAlunos = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    
    Alert.alert('Logout', 'Você saiu da conta.');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../../assets/kettlebell-fitness-still-life.jpg')} style={styles.imagfundo} >
      <View style={styles.container}>
        <Text style={styles.title}>Menu Alunos</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ListaExercicios')}>
          <Text style={styles.buttonText}>Exercícios da Academia</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Horas')}>
          <Text style={styles.buttonText}>Horário de Funcionamento</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair</Text>
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
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: dvw * 0.05,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontSize: dvw * 0.08,
    fontWeight: 'bold',
    color: '#fff',
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

export default MenuAlunos;
