import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import MageButtonSample from './MageButtonSample';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faDiceD20, faQuestionCircle, faCog, faCheck } from '@fortawesome/free-solid-svg-icons'

import BotchTensButtons from './BotchTensButtons';

import HomeScreen from './screens/Home';
import BtnTestScreen from './screens/BtnTest';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator();


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function tabBarIcon({ focused, color, size }) {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused
      ? faCoffee
      : faDiceD20
  } else if (route.name === 'BtnTest') {
    iconName = focused ? faCog : faCheck;
  }

  // You can return any component that you like here!
  return <FontAwesomeIcon icon={iconName} />;
}

const statusBarPadding = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  baseComponent: {
    paddingTop: statusBarPadding
  }
});

function App() {
  const body = "Hello World";
  return (
    // <FontAwesomeIcon icon={ faCheck } />
    // <MageButtonSample buttonText="Hello World"/>
    // <View style={{ alignSelf: 'baseline' }}>
    //     <BotchTensButtons btnHeight={40} />
    //     <Text>{body}</Text>

    //   </View>


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen name="BtnTest" component={BtnTestScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === 'Home') {
    //         iconName = focused
    //           ? faCoffee
    //           : faDiceD20
    //       } else if (route.name === 'BtnTest') {
    //         iconName = focused ? faCog : faCheck;
    //       }

    //       // You can return any component that you like here!
    //       return <FontAwesomeIcon icon={ iconName } />;
    //     }
    //   })}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="BtnTest" component={BtnTestScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    //// With Status bar hidden
    // <NavigationContainer>
    //   <StatusBar hidden/>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="BtnTest" component={BtnTestScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>

        <NavigationContainer styles={styles.baseComponent}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="BtnTest" component={BtnTestScreen} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

export default App;