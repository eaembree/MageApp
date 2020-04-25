import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HelloScreen extends Component {

    toBtnTest = () => this.props.navigation.navigate('BtnTest');

    render() {
        return (
            <View>
                <Text>"Welcome!"</Text>
                <Button title="To Btn Test" onPress={this.toBtnTest}></Button>
            </View>
        );
    }

}

export default HelloScreen;