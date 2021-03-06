import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, Platform, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DiceRoller from './screens/DiceRoller'
import SphereReference from './screens/SphereReference'
import LinksScreen from './screens/Links'

import {
  MagePurple
} from './Styles'

YellowBox.ignoreWarnings([
  // 2020-05-01: There is a 'bug' causing this list issue to pop up a lot.
  //   Remove in the future
  'VirtualizedLists should never be nested'
])


const Drawer = createDrawerNavigator();

const statusBarPadding = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  baseComponent: {
    paddingTop: statusBarPadding
  }
});


function App() {
  return (
    <NavigationContainer styles={styles.baseComponent}>
      <Drawer.Navigator initialRouteName="DiceRoller"
        drawerContentOptions={{
          activeTintColor: MagePurple
        }}
      >
        <Drawer.Screen
        name="DiceRoller"
        component={DiceRoller}
        options={{title: "Dice Roller"}} />
        <Drawer.Screen
          name="SphereReference"
          component={SphereReference}
          options={{title: "Sphere Reference"}} />
        <Drawer.Screen name="Links" component={LinksScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;