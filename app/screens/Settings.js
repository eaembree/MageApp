import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

import { SettingsContext } from '../SettingsData'

import { BotchOption } from './settings_components/BotchOption';
import { TensOption } from './settings_components/TensOption';
import { MagePurple, MageGold } from '../Styles';

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

    var [tester, setTester] = React.useState(false);

    return (
        <ScrollView style={styles.screenContainer}>
            <View style={styles.spacer}>
                <Text style={styles.header}>{"Settings"}</Text><View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Show Botch/Tens Buttons</Text>
                    <Switch trackColor={{ true: MagePurple }} thumbColor={tester == false ? null : MageGold}
                        value={showBotchTensButtons}
                        onValueChange={(v) => setShowBotchTensButtons(v)}
                    />
                </View>
            </View>

            <View style={styles.spacer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Allow Botch Fix w/ Willpower</Text>
                    <Switch trackColor={{ true: MagePurple }} thumbColor={tester == false ? null : MageGold}
                        value={allowBotchFixWithWillpower}
                        onValueChange={(v) => setAllowBotchFixWithWillpower(v)}
                    />
                </View>
            </View>

            <View style={styles.spacer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Allow Failure w/ Willpower</Text>
                    <Switch trackColor={{ true: MagePurple }} thumbColor={tester == false ? null : MageGold}
                        value={allowFailureFixWithWillpower}
                        onValueChange={(v) => setAllowFailureFixWithWillpower(v)}
                    />
                </View>
            </View>

            <View style={[styles.spacer, { flexDirection: 'row' }]}>
                <View style={{ flex: 1, paddingRight: 3 }}>
                    <BotchOption />
                </View>
                <View style={{ flex: 1, paddingLeft: 3 }}>
                    <TensOption />
                </View>
            </View>
        </ScrollView>
    )
}