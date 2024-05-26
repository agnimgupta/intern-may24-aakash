import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/BottomTabs/BottomTabs';
import AskQuestion from './src/Screens/AskQuestion';
import ViewAllReplies from './src/Screens/ViewAllReplies';
import AskQuestionCongratulations from './src/Components/Congratulations/AskQuestionCongratulations';
import AddAnswerCongratulations from './src/Components/Congratulations/AddAnswerCongratulations';
import AddAnswer from './src/Screens/AddAnswer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={BottomTabs} />
        <Stack.Screen name='AskQuestion' component={AskQuestion}/>
        <Stack.Screen name='AddAnswer' component={AddAnswer} />
        <Stack.Screen name='ViewAllReplies' component={ViewAllReplies} />
        <Stack.Screen name="AskQuestionCongratulations" component={AskQuestionCongratulations} />
        <Stack.Screen name="AddAnswerCongratulations" component={AddAnswerCongratulations} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})