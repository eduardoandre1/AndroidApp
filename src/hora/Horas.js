import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: dvw, height: dvh } = Dimensions.get('window');

const RelogioAcademia = () => {
  const [status, setStatus] = useState('Fechada');
  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    const verificarHorario = () => {
      const agora = new Date();
      const hora = agora.getHours();
      const minuto = agora.getMinutes();

      
      const horarioAbertura = 6;  
      const horarioFechamento = 21; 

      
      if (hora >= horarioAbertura && hora < horarioFechamento) {
        setStatus('Aberta');
      } else {
        setStatus('Fechada');
      }

    
      setHoraAtual(agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    const intervalo = setInterval(verificarHorario, 1000); 

    
    verificarHorario();

    return () => clearInterval(intervalo); 
  }, []);

  
  const statusCor = status === 'Fechada' ? 'red' : 'white';

  return (
    <View style={styles.container}>
      <Text style={[styles.hora, { color: statusCor }]}>{horaAtual}</Text>
      <Text style={[styles.status, { color: statusCor }]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  hora: {
    fontSize: dvw * 0.2, 
    fontWeight: 'bold',
    marginBottom: dvh * 0.02, 
  },
  status: {
    fontSize: dvw * 0.1, 
    fontWeight: 'bold',
  },
});

export default RelogioAcademia;