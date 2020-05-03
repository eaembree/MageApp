import React from 'react';
import { View } from 'react-native';
import { SingleOrExtended } from '../components/SingleOrExtended';
import { Chooser } from '../components/Chooser';
import { BotchTensBtns } from '../components/MainBotchTensBtns'

import { SettingsContext } from '../SettingsData'

export default function MainScreen() {

    const { showBotchTensButtons } = React.useContext(SettingsContext)

    const [mode, setMode] = React.useState('single');

    const setSingle = () => {
        if (mode !== 'single') setMode('single');
    }

    const setMulti = () => {
        if (mode !== 'multi') setMode('multi');
    }

    return (
        <View>
            <View style={{marginTop: 5}}>
                <BotchTensBtns showBotchTensButtons={showBotchTensButtons} />
            </View>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <SingleOrExtended type={mode}
                    setSingle={setSingle} setMulti={setMulti}
                />
            </View>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Chooser rollType={mode} />
            </View>
        </View>
    );
}
