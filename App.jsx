import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/BottomTabs/BottomTabs';
import AskQuestion from './src/Screens/AskQuestion';
import ViewAllReplies from './src/Screens/ViewAllReplies';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={BottomTabs} />
        <Stack.Screen name='AskQuestion' component={AskQuestion}/>
        <Stack.Screen name='ViewAllReplies' component={ViewAllReplies} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})