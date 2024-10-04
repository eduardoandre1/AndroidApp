import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login/Login'; 
import Menu from './src/menu/Menu';
import CadastroAlunos from './src/cadastro/CadastroAlunos';
import CadastroProfessores from './src/cadastro/CadastroProfessores';
import ExcluirA from './src/excluir/ExcluirA';
import ExcluirP from './src/excluir/ExcluirP';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: 'Menu' }} 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
