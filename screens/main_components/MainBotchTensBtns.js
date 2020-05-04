import React from 'react';
import {
    View, Text, Modal,
    TouchableOpacity, StyleSheet
} from 'react-native';
import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../../Styles'

import {
    SettingsContext, TensOptions, BotchOptions,
    getBotchText, getTensText
} from '../../SettingsData';

import { BotchOption } from '../settings_components/BotchOption'
import { TensOption } from '../settings_components/TensOption'

export function BotchTensBtns({ showBotchTensButtons }) {
    let result = <View />

    const {
        tensOption, botchOption
    } = React.useContext(SettingsContext);

    if (showBotchTensButtons) {
        result =
            <View style={{ marginLeft: 5, marginRight: 5, height: 40 }}>
                <View style={{
                    flex: 1, flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center', marginLeft: 10, marginRight: 10
                }}>
                    <View style={{flex: 1, marginRight: 5, height: 40}}>
                        <Botch />
                    </View>
                    <View style={{flex: 1, marginLeft: 5, height: 40}}>
                        <Tens />
                    </View>
                </View>
            </View>

    }

    return result;
}

function Botch() {
    const [modalVisisble, setModalVisible] = React.useState(false);
    const {
        botchOption, setBotchOption
    } = React.useContext(SettingsContext);
    const currentText = getBotchText(botchOption);
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisisble}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <View style={{ height: 160,  width: 200 }}>
                            <BotchOption/>
                        </View>
                        <TouchableOpacity
                            style={[btn.btn]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"Close"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={[btn.btn]} onPress={() => setModalVisible(true)}>
                <Text style={[btn.textColor, btn.btnText]}>{`Botch: ${currentText}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

function Tens() {
    const [modalVisisble, setModalVisible] = React.useState(false);
    const {
        tensOption, setTensOption
    } = React.useContext(SettingsContext);
    const currentText = getTensText(tensOption);
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisisble}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={[styles.centeredView]}>
                    <View style={[styles.modalView]}>
                        <View style={{ height: 160,  width: 200 }}>
                            <TensOption/>
                        </View>
                        <TouchableOpacity
                            style={[btn.btn]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"Close"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={[btn.btn]} onPress={() => setModalVisible(true)}>
                <Text style={[btn.textColor, btn.btnText]}>{`10s: ${currentText}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        marginTop: 35,
        marginBottom: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 15,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});
