import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import {
    MageButtonStyle as btn,
    MageButtonInvStyle as btnInv,
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

export function ResultsHistory({ items, showHistory, clearHistory, toggleShowHistory }) {
    return (
        <View>
            <ShowAndClear showHistory={showHistory}
                clearHistory={clearHistory}
                toggleShowHistory={toggleShowHistory} />
            <View style={{marginTop: 2}}>
                <HistoryPlaceholder items={items} showHistory={showHistory} />
            </View>
        </View>
    )
}

function HistoryPlaceholder({ items, showHistory }) {
    let result = <View></View>

    if (showHistory) {
        result = <HistoryTable data={items} />
    }

    return result;
}

function ShowAndClear({ showHistory, clearHistory, toggleShowHistory }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Show showHistory={showHistory} toggleShowHistory={toggleShowHistory} />
            <Clear clearHistory={clearHistory} />
        </View>
    )
}

function Show({ showHistory, toggleShowHistory }) {
    let faIcon = showHistory ? "chevron-down" : "chevron-right";

    return (
        <TouchableOpacity style={[btn.btn, styles.smallBtn, { marginRight: 2 }]} onPress={() => toggleShowHistory()}>
            <Text style={[btn.textColor, btn.btnText, styles.smallBtnText]}>History <FontAwesome5 name={faIcon} onPress={() => toggleShowHistory()} /></Text>
        </TouchableOpacity>
    )
}

function Clear({ clearHistory }) {
    return (
        <TouchableOpacity style={[btn.btn, styles.smallBtn, { marginLeft: 2 }]}
            onPress={() => clearHistory()}>
            <Text style={[btn.textColor, btn.btnText, styles.smallBtnText]}>Clear History</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    smallBtn: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 25,
        width: 85
    },
    smallBtnText: {
        fontSize: 12
    }
})

function HistoryTable({ data }) {

    return (
        <View style={{padding: 2, borderWidth: 2, borderColor: MagePurple, borderRadius: 5}}>
            <View style={table.header}>
                <View style={[table.th, { flex: 0.8, justifyContent: 'flex-start', paddingLeft: 2 }]}>
                    <Text style={table.thText}>Result</Text>
                </View>
                <View style={table.th}>
                    <Text style={table.thText}>Outcome</Text>
                </View>
                <View style={table.th}>
                    <Text style={table.thText}>Successes</Text>
                </View>
                <View style={table.th}>
                    <Text style={table.thText}>Ones</Text>
                </View>
                <View style={table.th}>
                    <Text style={table.thText}># Dice</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <View style={table.body}>
                    <View style={[table.td, { flex: 0.8, justifyContent: 'flex-start', paddingLeft: 2 }]}>
                        <Text style={table.tdText}>{item.outcome}</Text>
                    </View>
                    <View style={table.td}>
                        <Text style={table.tdText}>{item.finalSuccesses}</Text>
                    </View>
                    <View style={table.td}>
                        <Text style={table.tdText}>{item.successes}</Text>
                    </View>
                    <View style={table.td}>
                        <Text style={table.tdText}>{item.ones}</Text>
                    </View>
                    <View style={table.td}>
                        <Text style={table.tdText}>{item.numDice}</Text>
                    </View>
                </View>}
                keyExtractor={(item, index) => `history-item-${index}`}
            />
        </View>
    )
}

const table = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    th: {
        flex: 1, flexDirection: 'row', justifyContent: 'center',
        backgroundColor: MagePurple,
        borderBottomWidth: 2, borderBottomColor: MageGold,
        //borderWidth: 2, borderColor: MageGold,
        paddingTop: 2, paddingBottom: 3
    },
    thText: {
        color: MageGold, fontSize: 12
    },
    body: {
        flexDirection: 'row'
    },
    td: {
        flex: 1, flexDirection: 'row', justifyContent: 'center',
    },
    tdText: {
        color: MagePurple, fontSize: 12
    },
    jCenter: {
        justifyContent: 'center'
    }
})