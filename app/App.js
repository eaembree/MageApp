import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, Platform, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings'
import { SettingsContext, TensOptions, BotchOptions } from './SettingsData';

YellowBox.ignoreWarnings([
  // 2020-05-01: There is a 'bug' causing this list issue to pop up a lot.
  //   Remove in the future
  'VirtualizedLists should never be nested'
])


const Tab = createMaterialTopTabNavigator();

const statusBarPadding = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  baseComponent: {
    paddingTop: statusBarPadding
  }
});


function App() {
  const [tensOption, setTensOption] = React.useState(TensOptions.Regular);
  const [botchOption, setBotchOption] = React.useState(BotchOptions.RevisedM20);
  const [showBotchTensButtons, setShowBotchTensButtons] = React.useState(true);
  const [allowBotchFixWithWillpower, setAllowBotchFixWithWillpower] = React.useState(true);
  const [allowFailureFixWithWillpower, setAllowFailureFixWithWillpower] = React.useState(true);

  const initialSettingsState = {
    tensOption: tensOption,
    botchOption: botchOption,
    showBotchTensButtons: showBotchTensButtons,
    allowBotchFixWithWillpower: allowBotchFixWithWillpower,
    allowFailureFixWithWillpower: allowFailureFixWithWillpower,

    setTensOption: (newVal) => { setTensOption(newVal) },
    setBotchOption: (newVal) => { setBotchOption(newVal) },
    setShowBotchTensButtons: (newVal) => { setShowBotchTensButtons(newVal) },
    setAllowBotchFixWithWillpower: (newVal) => { setAllowBotchFixWithWillpower(newVal) },
    setAllowFailureFixWithWillpower: (newVal) => { setAllowFailureFixWithWillpower(newVal) }
  }

  return (
    <SettingsContext.Provider value={initialSettingsState}>
      <NavigationContainer styles={styles.baseComponent}>
        <Tab.Navigator>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}

export default App;