import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Linking, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { SettingsContext } from '../SettingsData'

import { BotchOption } from './settings_components/BotchOption';
import { TensOption } from './settings_components/TensOption';
import { MagePurple, MageGold } from '../Styles';

export default function LinksScreen() {
    const links = [
        {id: "magethepodcast", title: "Mage the Podcast", url: 'https://www.magethepodcast.com'},
        {id: "onyxpath", title: "The Onyx Path", url: 'http://theonyxpath.com'},
        {id: "whitewolfwiki", title: "White Wolf Wiki", url: 'https://whitewolf.fandom.com'},
    ]
    return (
        <ScrollView style={{marginBottom: 10, marginTop: 25, marginLeft: 10, marginRight: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginBottom: 5}}>Links</Text>
            <FlatList
                data={links}
                renderItem={({ item }) => <View style={{marginBottom: 20}}>
                    <Text style={{textDecorationLine: 'underline', fontSize: 20, color: 'blue'}}
                        onPress={() => Linking.openURL(item.url)}>{item.title}</Text>
                </View>}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    )
}