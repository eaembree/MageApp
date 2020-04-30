import React from 'react';
import { View, Text, Button } from 'react-native';

import { SettingsContext } from '../SettingsData'

export default function SettingsScreen() {
    const settings = React.useContext(SettingsContext);
    return (
        <View style={{margin: 10}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>{"Settings"}</Text>
            <Text>{"tensOption: "}{settings.tensOption}</Text>
            <Text>{"botchOption: "}{settings.botchOption}</Text>
            <Text>{"showBotchTensButtons: "}{settings.showBotchTensButtons ? 'true' : 'false'}</Text>
            <Text>{"allowBotchFixWithWillpower: "}{settings.allowBotchFixWithWillpower ? 'true' : 'false'}</Text>
            <Text>{"allowFailureFixWithWillpower: "}{settings.allowFailureFixWithWillpower ? 'true' : 'false'}</Text>
            <Button title="flipShowBotchTens" onPress={settings.toggleShowBotchTensButtons}></Button>
            <Button title="flipAllowBotchFixWithWillpower" onPress={settings.toggleAllowBotchFixWithWillpower}></Button>
            <Button title="flipAllowFailureFixWithWillpower" onPress={settings.toggleAllowFailureFixWithWillpower}></Button>
        </View>
    )
}