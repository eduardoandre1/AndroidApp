import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ListaExercicios = () => {
  const [grupoMuscular, setGrupoMuscular] = useState('Peito');

  
  const exercicios = {
	Peito: [
	  { nome: 'Supino Reto', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=5XGvqO60W4A' },
	  { nome: 'Supino Inclinado', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=6zKqM9jDkqM' },
	  { nome: 'Cross Over', series: '3x10', aparelho: 'Cabos', video: 'https://www.youtube.com/watch?v=aE6J1LReYwU' },
	  { nome: 'Peck Deck', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=Xhv7-tXc5U0' },
	  { nome: 'Flexão', series: '3x10', aparelho: 'Peso Corporal', video: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
	  { nome: 'Pullover', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=RZ10X5VUR9E' },
	  { nome: 'Flexão de Braço', series: '3x10', aparelho: 'Peso Corporal', video: 'https://www.youtube.com/watch?v=I2QOG9g6QG4' },
	  { nome: 'Dumbbell Press', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=2K-c5Z5c7tU' },
	],
	Costas: [
	  { nome: 'Puxada na Barra Fixa', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=2r0XElH96Js' },
	  { nome: 'Remada Curvada', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=Ly5a3W1e4xI' },
	  { nome: 'Remada Unilateral', series: '3x10', aparelho: 'Halter', video: 'https://www.youtube.com/watch?v=5W2cBWoQGdg' },
	  { nome: 'Puxada com Pegada Supinada', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=AYmT5V4jjp8' },
	  { nome: 'Levantamento Terra', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=5Y3-qM_UjQo' },
	  { nome: 'Hiperextensão', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=zU1c75Cr2WI' },
	  { nome: 'Barra Fixa com Peso', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=cmG1k6Z5k_U' },
	  { nome: 'Puxada na Máquina', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=1PZ4FfTOSt4' },
	],
	Pernas: [
	  { nome: 'Agachamento', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=6tQp6U7e6nU' },
	  { nome: 'Leg Press', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=pDChb1H7GLY' },
	  { nome: 'Cadeira Extensora', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=U_xh2_LMyz4' },
	  { nome: 'Cadeira Flexora', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=I3LkxgcnBQk' },
	  { nome: 'Panturrilha em Pé', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=32WxXY1iK9A' },
	  { nome: 'Stiff', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=zUyH9c2n4Zc' },
	  { nome: 'Avanço', series: '3x10', aparelho: 'Peso Corporal', video: 'https://www.youtube.com/watch?v=dd2gVAXa2vA' },
	  { nome: 'Abdução de Quadril', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=lFmR0SD-hlE' },
	],
	Ombros: [
	  { nome: 'Desenvolvimento com Halteres', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=8yqa0f5cx2s' },
	  { nome: 'Elevação Lateral', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=E8M2VKiOB74' },
	  { nome: 'Elevação Frontal', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=JzD7pkT-KvY' },
	  { nome: 'Remada Alta', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=Wv2n_Ag1Jm0' },
	  { nome: 'Encolhimento', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=6PTM91vttDw' },
	  { nome: 'Crucifixo Inverso', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=1KJ-sW-YUfg' },
	  { nome: 'Puxada na Corda', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=UDRvwA1F-xo' },
	  { nome: 'Face Pull', series: '3x10', aparelho: 'Cabo', video: 'https://www.youtube.com/watch?v=6ZZ3utJFX5M' },
	],
	Braços: [
	  { nome: 'Rosca Direta', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=Atp4TxBe2oU' },
	  { nome: 'Tríceps Testa', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=yCBkdQ4NBrI' },
	  { nome: 'Rosca Martelo', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=4GJAWt2V_Hg' },
	  { nome: 'Mergulho', series: '3x10', aparelho: 'Barras Paralelas', video: 'https://www.youtube.com/watch?v=30WZB0g7D_E' },
	  { nome: 'Tríceps Pulley', series: '3x10', aparelho: 'Máquina', video: 'https://www.youtube.com/watch?v=O1ndOke90c4' },
	  { nome: 'Rosca Inversa', series: '3x10', aparelho: 'Barra', video: 'https://www.youtube.com/watch?v=LFU-pIFVxlY' },
	  { nome: 'Extensão de Tríceps', series: '3x10', aparelho: 'Cabo', video: 'https://www.youtube.com/watch?v=cKxE7akgPYI' },
	  { nome: 'Rosca Concentrada', series: '3x10', aparelho: 'Halteres', video: 'https://www.youtube.com/watch?v=0Do5if0hvN0' },
	],
  };

  const renderItem = ({ item }) => (
	<View style={styles.item}>
	  <Text style={styles.itemText}>{item.nome}</Text>
	  <Text style={styles.itemText}>Séries: {item.series}</Text>
	  <Text style={styles.itemText}>Aparelho: {item.aparelho}</Text>
	  <Pressable onPress={() => Linking.openURL(item.video)}>
		<Text style={styles.videoLink}>Assistir Vídeo</Text>
	  </Pressable>
	</View>
  );

  return (
	<View style={styles.container}>
	  <Text style={styles.title}>Lista de Exercícios</Text>
	  <Picker
		selectedValue={grupoMuscular}
		style={styles.picker}
		onValueChange={(itemValue) => setGrupoMuscular(itemValue)}
	  >
		<Picker.Item label="Peito" value="Peito" />
		<Picker.Item label="Costas" value="Costas" />
		<Picker.Item label="Pernas" value="Pernas" />
		<Picker.Item label="Ombros" value="Ombros" />
		<Picker.Item label="Braços" value="Braços" />
		{/* Adicione mais opções de grupos musculares aqui */}
	  </Picker>
	  <FlatList
		data={exercicios[grupoMuscular]}
		renderItem={renderItem}
		keyExtractor={(item) => item.nome}
	  />
	</View>
  );
};

const styles = StyleSheet.create({
  container: {
	flex: 1,
	padding: 20,
	backgroundColor: 'black',
  },
  title: {
	fontSize: 24,
	color: 'white',
	marginBottom: 20,
	textAlign: 'center',
  },
  picker: {
	height: 50,
	width: '100%',
	color: 'white',
  },
  item: {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	padding: 15,
	borderRadius: 5,
	marginBottom: 10,
  },
  itemText: {
	color: 'white',
	fontSize: 16,
  },
  videoLink: {
	color: 'cyan',
	marginTop: 5,
	textDecorationLine: 'underline',
  },
});

export default ListaExercicios;
