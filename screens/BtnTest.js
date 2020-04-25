import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BotchTensButtons from '../BotchTensButtons';

class BtnTestScreen extends Component {

    render() {
        return (
            <View style={{ alignSelf: 'baseline' }}>
                <BotchTensButtons btnHeight={40} />
            </View>
        );
    }

}

export default BtnTestScreen;