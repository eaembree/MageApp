import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings'
import LinksScreen from './screens/Links'
import { SettingsContext, TensOptions, BotchOptions } from './SettingsData';


const Tab = createMaterialTopTabNavigator();


export default function DiceRollerScene() {
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
      
        <Tab.Navigator>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      
    </SettingsContext.Provider>
  );
}
