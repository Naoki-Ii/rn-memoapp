import React from 'react';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetaillScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import {firebaseConfig} from './env';

require('firebase/firestore');

const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Log In"
      screenOptions={{
        headerStyle: {backgroundColor:'#6699FF'},
        headerTitleStyle: {color:'#ffffff'},
        headerTitle: 'Memo App',
        headerTintColor: '#ffffff',
        headerBackTitle: 'Back',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled:true,
        gestureDirection: 'horizontal',
      }}
      >
        <Stack.Screen 
        name="Log In" 
        component={LogInScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        />
        <Stack.Screen 
        name="Sign Up" 
        component={SignUpScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        />
        <Stack.Screen name="Memo List" component={MemoListScreen}/>
        <Stack.Screen name="Memo Edit" component={MemoEditScreen}/>
        <Stack.Screen name="Memo Create" component={MemoCreateScreen}/>
        <Stack.Screen name="Memo Detail" component={MemoDetailScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}
