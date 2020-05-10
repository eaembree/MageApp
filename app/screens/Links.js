import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { SettingsContext } from '../SettingsData'

import { BotchOption } from './settings_components/BotchOption';
import { TensOption } from './settings_components/TensOption';
import { MagePurple, MageGold } from '../Styles';

export default function LinksScreen() {
    return (
        <View>
            <View style={{marginBottom: 20}}>
                <Text onPress={() => Linking.openURL('https://www.magethepodcast.com')}>Mage the Podcast</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text onPress={() => WebBrowser.openBrowserAsync('http://www.theonyxpath.com')}>The Onyx Path</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text onPress={() => WebBrowser.openBrowserAsync('https://whitewolf.fandom.com')}>White Wolf Wiki</Text>
            </View>
        </View>
    )
}