import React from 'react';
import { View, ScrollView } from 'react-native';
import { SingleOrExtended } from './main_components/SingleOrExtended';
import { Chooser } from './main_components/Chooser';
import { BotchTensBtns } from './main_components/MainBotchTensBtns'

import { SettingsContext } from '../SettingsData'

export default function MainScreen() {

    const { showBotchTensButtons } = React.useContext(SettingsContext)

    const [mode, setMode] = React.useState('single');

    const setSingle = () => {
        if (mode !== 'single') setMode('single');
    }

    const setExtended = () => {
        if (mode !== 'extended') setMode('extended');
    }

    return (
        <ScrollView>
            <View style={{marginTop: 5}}>
                <BotchTensBtns showBotchTensButtons={showBotchTensButtons} />
            </View>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <SingleOrExtended type={mode}
                    setSingle={setSingle} setExtended={setExtended}
                />
            </View>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Chooser rollType={mode} />
            </View>
        </ScrollView>
    );
}
