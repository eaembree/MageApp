import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DiceRollsButtons } from './DiceRollsButtons'
import { NumNeededButtons } from './NumNeededButtons'
import { NumDiceButtons } from '../NumDiceButtons';
import { FontAwesome5 } from '@expo/vector-icons'
import { SettingsContext } from '../../../SettingsData'
import DiceRoller from '../../../lib/DiceRoller';

import {
    MageButtonStyle as btn,
    MageButtonInvStyle as btnInv,
    MageGrey, MagePurple
} from '../../../Styles'

export function ExtendedBody({
    rollingStarted, difficulty, numRolls, modifyDifficulty, modifyNumRolls,
    rollsUnlimited, toggleRollsUnlimited, successesNeeded, modifySuccessesNeeded,
    numDice, modifyNumDice, startRolling, stopRolling }) {

    return rollingStarted ?
        <Rolling
            difficulty={difficulty}
            numRolls={numRolls}
            modifyDifficulty={modifyDifficulty}
            rollsUnlimited={rollsUnlimited}
            successesNeeded={successesNeeded}
            numDice={numDice}
            stopRolling={stopRolling} /> :
        <Setup
            difficulty={difficulty}
            numRolls={numRolls}
            modifyDifficulty={modifyDifficulty}
            modifyNumRolls={modifyNumRolls}
            rollsUnlimited={rollsUnlimited}
            toggleRollsUnlimited={toggleRollsUnlimited}
            successesNeeded={successesNeeded}
            modifySuccessesNeeded={modifySuccessesNeeded}
            numDice={numDice}
            modifyNumDice={modifyNumDice}
            startRolling={startRolling} />;
}

function Setup({
    difficulty, numRolls, modifyDifficulty, modifyNumRolls,
    rollsUnlimited, toggleRollsUnlimited, successesNeeded,
    modifySuccessesNeeded, numDice, modifyNumDice, startRolling }) {

    return (
        <View>
            <View>
                <DiceRollsButtons
                    difficulty={difficulty}
                    numRolls={numRolls}
                    modifyDifficulty={modifyDifficulty}
                    modifyNumRolls={modifyNumRolls}
                    rollsUnlimited={rollsUnlimited}
                    toggleRollsUnlimited={toggleRollsUnlimited} />
            </View>

            <View style={{ marginTop: 5 }}>
                <NumNeededButtons value={successesNeeded} modifyValue={modifySuccessesNeeded} />
            </View>

            <View style={{ marginTop: 5 }}>
                <NumDiceButtons numDice={numDice} modifyNumDice={modifyNumDice} rollDice={startRolling} />
            </View>
        </View>
    )
}

function Rolling({
    difficulty, numRolls, rollsUnlimited,
    successesNeeded, numDice, stopRolling }) {

        let [lastResult, setLastResult] = React.useState(null);
        
        // Each history record is an object with keys
        // * roll: raw roll data
        // * options: spend willpower or not, etc.
        // * running: running state of the 
        let [history, setHistory] = React.useState([]);

        const {
            tensOption, botchOption
        } = React.useContext(SettingsContext);

        const computeNewRunningState = () => {
            return {
                totalSuccesses: lastResult != null ? lastResult.running.totalSuccesses + 1 : 1,
                totalWillpowerSpent: lastResult != null ? lastResult.running.totalWillpowerSpent + 1 : 1
            }
        }

        const doNewRoll = (spendWillpower) => {
            let diceRoller = new DiceRoller();
            diceRoller.setBotch(botchOption);
            diceRoller.setTens(tensOption);
            let result = diceRoller.getSingleActionResult(numDice, difficulty, 0, spendWillpower);
            let newHistory = {
                roll: result,
                options: {
                    spendWillpower: spendWillpower
                },
                running: runningState
            }
            setLastResult(newHistory);
            setHistory([newHistory].concat(history))
        }

    return (
        <View>
            <RollingHeader
                difficulty={difficulty} numRolls={numRolls}
                successesNeeded={successesNeeded} numDice={numDice}
                stopRolling={stopRolling} />
            <RollingBody />
        </View>
    )
}

function RollingHeader({ difficulty, numRolls, successesNeeded, numDice, stopRolling }) {
    let textStyleArray = [btnInv.textColor, btnInv.btnText, { textAlignVertical: 'center' }];
    return (
        <View style={styles.rollingHeader}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                <Text style={textStyleArray}>Difficulty: {difficulty}</Text>
                <Text style={textStyleArray}># Rolls: {numRolls}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, marginBottom: 5 }}>
                <Text style={textStyleArray}>Successes Needed: {successesNeeded}</Text>
                <View style={{ width: 10 }}></View>
                <TouchableOpacity
                    style={[btn.btn, styles.resetBtnOverrides]}
                    onPress={() => stopRolling()}>
                    <Text style={[btn.textColor, btn.btnText, { textAlignVertical: 'center', height: 25 }]}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5 }}>
                <Text style={textStyleArray}>Rolling: {numDice} <FontAwesome5 name="dice-d20" /></Text>
            </View>
        </View>
    )
}

function RollingBody() {
    return (
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <Text>Rolling Body</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rollingHeader: {
        borderColor: MagePurple,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    resetBtnOverrides: {
        paddingLeft: 8,
        paddingRight: 8,
        height: 20,
        borderRadius: 3
    }
})