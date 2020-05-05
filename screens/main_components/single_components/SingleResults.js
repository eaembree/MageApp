import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

export function SingleResults({ numDice, rollOutcomes, rollOutcomesArray,
    outcome, successes, ones, finalSuccesses, difficulty, threshold,
    botchType, tensType, usedWillpower, isFixedWithWill }) {

    let resultsRender = <View></View>;
    let outcomeColor = MagePurple;
    if(outcome == 'Botch'){
        outcomeColor = 'red';
    }

    if (numDice != null) {
        resultsRender =
            <View style={styles.outcomeContainer}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: outcomeColor, fontWeight: 'bold', fontSize: 20 }}>{outcome}</Text>
                </View>
                <View style={[styles.boxRow, { marginBottom: 5, marginTop: 5 }]}>
                    <GreyBox title="Outcome" content={finalSuccesses} />
                    <GreyBox title="Successes" content={successes} />
                </View>
                <View style={styles.boxRow}>
                    <GreyBox title="Ones" content={ones} />
                    <GreyBox title="Dice" content={<Dice rollOutcomesArray={rollOutcomesArray} />} />
                </View>
            </View>
    }

    return resultsRender;
}

function GreyBox({ title, content }) {
    return (
        <View style={styles.card}>
            <View>
                <Text style={{ color: MagePurple }}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>: </Text>
                    <Text style={styles.black}>{content}</Text>
                </Text>
            </View>
        </View>
    )
}

function Dice({ rollOutcomesArray }) {
    let theMap = rollOutcomesArray.map((item, index) => {
        if (item == 10) return <Ten key={index.toString()} />
        if (item == 1) return <One key={index.toString()} />
        return <OtherNum n={item} key={index.toString()} />
    })
    return (
        <Text>{theMap}</Text>
    )
}

function Ten() {
    return <Text style={{ fontWeight: 'bold' }}>10 </Text>
}

function One() {
    return <Text style={{ color: 'red' }}>1 </Text>
}

function OtherNum({ n }) {
    return <Text>{n} </Text>
}

const styles = StyleSheet.create({
    outcomeContainer: {
        //borderWidth: 3, borderColor: 'black'
    },
    card: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: MageGrey,
        marginLeft: 5,
        marginRight: 5,
        height: 30
    },
    boxRow: {
        flex: 1,
        flexDirection: 'row'
    },


    black: {
        borderWidth: 2, borderColor: 'black'
    }
})
