import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../Styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftButton: {
        flex: 1,
        height: 40,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: 0
    },
    rightButton: {
        flex: 1,
        height: 40,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: 0
    },
    typeContainer: {
        marginLeft: 10,
        marginRight: 10
    }
});

function Single() {
    return (
        <View>
            <Text>{"Single"}</Text>
            <DTButtons />
        </View>
    );
}

function Multi() {
    return (
        <View>
            <Text>{"Multi"}</Text>
            <DTButtons />
        </View>
    );
}

function DTButtons() {
    const greyCardBody = [
        btnOut.btn,
        { backgroundColor: '#ebebeb', flex: 1, height: 60, marginLeft: 5, marginRight: 5 },
        { paddingTop: 2, paddingBottom: 2, marginTop: 20 }
    ];
    const greyCardHeader = [
        btnOut.btnText, btnOut.textColor,
        { marginBottom: 5 },
        //{ borderWidth: 3, borderColor: 'black' }
    ];
    const grayCardBtnRow = [
        { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
        //{ borderWidth: 3, borderColor: 'black' }
    ];
    const grayCardYellowBtn = [
        btnInv.btn,
        { borderRadius: 5 },
        { height: 30, width: 30 },
        { padding: 0 },
        { marginTop: 0, marginBottom: 10 }
    ];
    const grayCardNumber = [
        btnInv.btn,
        { borderRadius: 5 },
        { height: 30, width: 30 },
        { padding: 0 },
        { borderWidth: 0 },
        { backgroundColor: 'transparent'},
        { marginTop: 0, marginBottom: 10 }
    ];
    const grayCardYellowBtnText = [
        btnInv.btnText, btnInv.textColor
    ];
    const flexCenter = { flex: 1, justifyContent: 'center', alignItems: 'center' }
    return (
        <View style={[styles.container, { marginTop: 25, marginBottom: 20 }]}>
            <View style={greyCardBody}>
                <View styles={{ flex: 1 }}>
                    <View style={flexCenter}>
                        <Text style={greyCardHeader}>Difficulty</Text>
                    </View>
                    <View style={grayCardBtnRow}>
                        <TouchableOpacity style={grayCardYellowBtn}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"-1"}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={grayCardNumber}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"5"}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={grayCardYellowBtn}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"+1"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={greyCardBody}>
            <View styles={{ flex: 1 }}>
                    <View style={flexCenter}>
                        <Text style={greyCardHeader}>Threshold</Text>
                    </View>
                    <View style={grayCardBtnRow}>
                        <TouchableOpacity style={grayCardYellowBtn}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"-1"}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={grayCardNumber}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"5"}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={grayCardYellowBtn}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"+1"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

function Chooser({ rollType }) {
    let output;
    if (rollType === 'single') {
        output = <Single />;
    }
    else {
        output = <Multi />;
    }

    return output
}

class ToggleButtonsScreen extends Component {
    constructor() {
        super();
        this.state = {
            type: 'single',

            leftBtnStyle: btn.btn,
            leftTextStyle: btn.btnText,
            leftTextColor: btn.textColor,

            rightBtnStyle: btnOut.btn,
            rightTextStyle: btnOut.btnText,
            rightTextColor: btnOut.textColor
        }
    }

    setSingle = () => {
        if (this.state.type !== 'single') {
            this.setState({
                type: 'single',
                leftBtnStyle: btn.btn,
                leftTextStyle: btn.btnText,
                leftTextColor: btn.textColor,
                rightBtnStyle: btnOut.btn,
                rightTextStyle: btnOut.btnText,
                rightTextColor: btnOut.textColor
            });
        }
    }

    setMulti = () => {
        if (this.state.type !== 'multi') {
            this.setState({
                type: 'multi',
                leftBtnStyle: btnOut.btn,
                leftTextStyle: btnOut.btnText,
                leftTextColor: btnOut.textColor,
                rightBtnStyle: btn.btn,
                rightTextStyle: btn.btnText,
                rightTextColor: btn.textColor
            });
        }
    }

    render() {
        return (
            <View>
                <View style={[styles.container, { marginTop: 25, marginBottom: 20 }]}>
                    <TouchableOpacity
                        style={[this.state.leftBtnStyle, styles.leftButton]}
                        onPress={this.setSingle}
                    >
                        <Text style={[this.state.leftTextStyle, this.state.leftTextColor]}>Single Action</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[this.state.rightBtnStyle, styles.rightButton]}
                        onPress={this.setMulti}
                    >
                        <Text style={[this.state.rightTextStyle, this.state.rightTextColor]}>Extended Action</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.typeContainer}>
                    <Chooser rollType={this.state.type} />
                </View>
            </View>
        );
    }
}

export default ToggleButtonsScreen;