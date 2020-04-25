import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faDiceD20, faQuestionCircle, faCog, faCheck } from '@fortawesome/free-solid-svg-icons'

import { MageButtonStyle as btn, MageButtonInvStyle as btnInv } from './Styles'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    }
});

class MageButtonSample extends Component {

    render() {
        const { buttonText } = this.props;

        return (
            <TouchableOpacity style={styles.main}>
                <View style={btn.btn}>
                    <FontAwesomeIcon icon={ faDiceD20 } style={[btn.textColor, {marginRight: 3}]} />
                    <Text style={[btn.btnText, btn.textColor]}>{buttonText}</Text>
                </View>
                <View style={btnInv.btn}>
                    <FontAwesomeIcon icon={ faDiceD20 } style={[btnInv.textColor, {marginRight: 3}]} />
                    <Text style={[btnInv.btnText, btnInv.textColor]}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default MageButtonSample;