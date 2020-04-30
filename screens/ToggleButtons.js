import React from 'react';
import { View } from 'react-native';
import { SingleOrExtended } from '../components/SingleOrExtended';
import { Chooser } from '../components/Chooser';

export function ToggleButtonsScreen() {

    const [mode, setMode] = React.useState('single');

    const setSingle = () => {
        if (mode !== 'single') setMode('single');
    }

    const setMulti = () => {
        if (mode !== 'multi') setMode('multi');
    }

    return (
        <View>
            <View>
                <SingleOrExtended type={mode}
                    setSingle={setSingle} setMulti={setMulti}
                />
            </View>
            <View style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>
                <Chooser rollType={mode} />
            </View>
        </View>
    );
}

export default ToggleButtonsScreen;