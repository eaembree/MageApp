import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MageButtonSample from './MageButtonSample';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faDiceD20, faQuestionCircle, faCog, faCheck } from '@fortawesome/free-solid-svg-icons'

import BotchTensButtons from './BotchTensButtons';

import HomeScreen from './screens/Home';
import BtnTestScreen from './screens/BtnTest';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
  const body = "Hello World";
  return (
    // <FontAwesomeIcon icon={ faCheck } />
    // <MageButtonSample buttonText="Hello World"/>
    // <View style={{ alignSelf: 'baseline' }}>
    //     <BotchTensButtons btnHeight={40} />
    //     <Text>{body}</Text>

    //   </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="BtnTest" component={BtnTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;