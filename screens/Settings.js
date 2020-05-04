import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { SettingsContext } from '../SettingsData'

import { YesNoOption } from './settings_components/YesNoOption';
import { BotchOption } from './settings_components/BotchOption';
import { TensOption } from './settings_components/TensOption';

const styles = StyleSheet.create({
    screenContainer: {
        margin: 10
    },
    header: {
        fontSize: 25, textDecorationLine: 'underline'
    },
    spacer: {
        marginBottom: 15
    }
});

export default function SettingsScreen() {
    const {
        showBotchTensButtons, setShowBotchTensButtons,
        allowBotchFixWithWillpower, setAllowBotchFixWithWillpower,
        allowFailureFixWithWillpower, setAllowFailureFixWithWillpower
    } = React.useContext(SettingsContext);

    return (
        <ScrollView style={styles.screenContainer}>
            <Text style={styles.header}>{"Settings"}</Text>
            <View style={styles.spacer}>
                <YesNoOption
                    title="Show Botch/Tens Buttons"
                    yesTrue={showBotchTensButtons}
                    yesClicked={() => { setShowBotchTensButtons(true) }}
                    noClicked={() => { setShowBotchTensButtons(false) }}
                />
            </View>

            <View style={styles.spacer}>
                <YesNoOption
                    title="Allow Botch Fix w/ Willpower"
                    yesTrue={allowBotchFixWithWillpower}
                    yesClicked={() => { setAllowBotchFixWithWillpower(true) }}
                    noClicked={() => { setAllowBotchFixWithWillpower(false) }}
                />
            </View>

            <View style={styles.spacer}>
                <YesNoOption
                    title="Allow Failure Fix w/ Willpower"
                    yesTrue={allowFailureFixWithWillpower}
                    yesClicked={() => { setAllowFailureFixWithWillpower(true) }}
                    noClicked={() => { setAllowFailureFixWithWillpower(false) }}
                />
            </View>

            <View style={styles.spacer}>
                <BotchOption />
            </View>

            <View style={styles.spacer}>
                <TensOption />
            </View>
        </ScrollView>
    )
}