import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BotchTensButtons from '../BotchTensButtons';

function Single(){
    return (
    <Text>{"Single"}</Text>
    );
}

function Multi(){
    return (
    <Text>{"Multi"}</Text>
    );
}

function Chooser({rollType}){
    let output;
    if(rollType === 'single'){
        output = <Single/>;
    }
    else{
        output = <Multi/>;
    }
    
    return output
}

class CondTestScreen extends Component {
    constructor(){
        super();
        this.state ={
            rollType: 'single'
        } ;
    }

    onSingle = () => this.setState({rollType: 'single'});
    onMulti = () => this.setState({rollType: 'multi'});

    render() {
            return (
                <View>
                    <Button title="To Single" onPress={this.onSingle}></Button>
                    <Button title="To Multi" onPress={this.onMulti}></Button>
                    <Chooser rollType={this.state.rollType} />
                </View>
            )
    }

}

export default CondTestScreen;