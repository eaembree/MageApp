import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DTButtons } from './DtButtons';

export function Single() {
    return (
        <View>
            <DTButtons />
            <Text>{"Single"}</Text>
        </View>
    );
}