import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login/Login'; 
import MenuAlunos from './src/menu/MenuAlunos';
import CadastroAlunos from './src/cadastro/CadastroAlunos';
import CadastroProfessores from './src/cadastro/CadastroProfessores';
import ExcluirA from './src/excluir/ExcluirA';
import ExcluirP from './src/excluir/ExcluirP';
import MenuProfessores from './src/menu/MenuProfessores';
import ListaAlunos from './src/lista/ListaAlunos';
import ListaProfessores from './src/lista/ListaProfessores'
import Horas from './src/hora/Horas';
import ListaExercicios from './src/lista/ListaExercicios'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuProfessores">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="MenuAlunos" 
          component={MenuAlunos} 
          options={{ title: 'Menu Alunos' }} 
        />
        <Stack.Screen 
          name="CadastroAlunos" 
          component={CadastroAlunos} 
          options={{ title: 'Cadastro de Alunos' }} 
        />
        <Stack.Screen 
          name="CadastroProfessores" 
          component={CadastroProfessores} 
          options={{ title: 'Cadastro de Professores' }} 
        />
         <Stack.Screen 
          name="ExcluirA" 
          component={ExcluirA} 
          options={{ title: 'Excluir Alunos' }} 
        />
        <Stack.Screen 
          name="ExcluirP" 
          component={ExcluirP} 
          options={{ title: 'Excluir Professores' }} 
        />
        <Stack.Screen 
          name="MenuProfessores" 
          component={MenuProfessores} 
          options={{ title: 'Menu Professores' }} 
        />
         <Stack.Screen 
          name="ListaAlunos" 
          component={ListaAlunos} 
          options={{ title: 'Lista de Alunos' }} 
        />
        <Stack.Screen 
          name="ListaProfessores" 
          component={ListaProfessores} 
          options={{ title: 'Lista de Professores' }} 
        />
         <Stack.Screen 
          name="Horas" 
          component={Horas} 
          options={{ title: 'Horario de Funcionamento' }} 
        />
         <Stack.Screen 
          name="ListaExercicios" 
          component={ListaExercicios} 
          options={{ title: 'Lista de Exercicios' }} 
        />
      </Stack.Navigator>
      
    
    </NavigationContainer>
  );
}

export default App;


