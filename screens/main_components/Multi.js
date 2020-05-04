import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DTButtons } from './DtButtons';

export function Multi() {
    return (
        <View>
            <DTButtons />
            <Text>{"Multi"}</Text>
        </View>
    );
}