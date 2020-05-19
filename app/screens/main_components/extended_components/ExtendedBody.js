import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
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

        const computeNewRunningState = (spendWillpower) => {
            let willMod = spendWillpower ? 1 : 0;
            return {
                totalSuccesses: lastResult != null ? lastResult.running.totalSuccesses + 1 : 1,
                totalWillpowerSpent: lastResult != null ? lastResult.running.totalWillpowerSpent + willMod : willMod
            }
        }

        const doNewRoll = (spendWillpower) => {
            console.log('spend: ' + spendWillpower);
            let diceRoller = new DiceRoller();
            diceRoller.setBotch(botchOption);
            diceRoller.setTens(tensOption);
            let result = diceRoller.getSingleActionResult(numDice, difficulty, 0, spendWillpower);
            let newHistory = {
                roll: result,
                options: {
                    spendWillpower: spendWillpower
                },
                running: computeNewRunningState(spendWillpower)
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
            <RollingBody doNewRoll={doNewRoll} lastResult={lastResult} history={history} />
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

function RollingBody({ doNewRoll, lastResult, history }) {
    let textStyleArray = [
        btnInv.textColor, btnInv.btnText,
        {
            textAlign: 'center',
            textAlignVertical: 'center',
            textDecorationLine: 'underline',
            fontSize: 20,
            marginTop: 5,
            marginBottom: 5
        }
    ];

    const shouldAllowRoll = () => {
        return lastResult == null || !lastIsBotch();
    }

    const lastIsBotch = () => {
        if(lastResult == null || lastResult.roll == null) return false;
        return lastResult.roll.isBotch();
    }

    //console.log(lastResult);

    let header = null;
    if(lastIsBotch()) {
        header =
            <View style={{marginTop: 5, marginBottom: 5, padding: 10, borderRadius: 5, borderColor: 'red', borderWidth: 2, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center', textAlignVertical: 'center', color: 'red', fontSize: 25}}>Botch</Text>
            </View>
    } else {
        header = <View>
                    <Text style={textStyleArray}>Roll</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            style={[btn.btn, {flex: 1, marginLeft: 5, marginRight: 5}]}
                            onPress={() => doNewRoll(false)}
                        >
                            <Text style={[btn.textColor, btn.btnText]}>Normal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[btn.btn, {flex: 1, marginLeft: 5, marginRight: 5}]}
                            onPress={() => doNewRoll(true)}
                        >
                            <Text style={[btn.textColor, btn.btnText]}>With Willpower</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    }

    let body;
    if(history == null || history.length == 0) {
        body = <View><Text>empty</Text></View>
    } else {
        body = <RollingHistory history={history}/>
    }

    return (
        <View style={{marginLeft: 10, marginRight: 10}}>
            {header}
            {body}
        </View>
    )
}

function RollingHistory({ history }) {
    return (
        <View>
            <FlatList
                data={history}
                renderItem={({ item, index }) =>
                    <RollingHistoryItem
                        roll={item.roll}
                        options={item.options}
                        running={item.running}
                        index={index} />}
                keyExtractor={(item, index) => `history-item-${index}`}
            />
        </View>
    )
}

function RollingHistoryItem({roll, options, running, index}) {
    const greyBoxCommon = {
        borderColor: MagePurple, borderWidth: 1, borderRadius: 3,
        backgroundColor: 'lightgray',
        textAlignVertical: 'center', textAlign: 'center',
        marginTop: 5,
        paddingTop: 3, paddingBottom: 3
    }
    return (
        <View style={{marginTop: 5, borderColor: 'gray', borderWidth: 1, borderRadius: 5}}>
            <View style={{backgroundColor: 'lightgray', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderColor: 'gray', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderWidth: 1}}>
                <Text>Top</Text>
            </View>
            <View style={{paddingTop: 5, paddingBottom: 5}}>
                <Text>{running.totalSuccesses} Total Successes</Text>
                <Text>roll outcome {roll.outcome}</Text>
                <Text style={[greyBoxCommon, btnInv.textColor, btnInv.btnText, {marginLeft: 20, marginRight: 20}]}>Willpower Spent: {running.totalWillpowerSpent}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: 20, marginRight: 20 }}>
                    <Text style={[greyBoxCommon, { flex: 1, marginRight: 10 }]}>
                        <Text style={[btnInv.textColor, btnInv.btnText]}>Outcome: </Text>
                        <Text style={{ color: MagePurple }}>{roll.finalSuccesses}</Text>
                    </Text>
                    <Text style={[greyBoxCommon, { flex: 1, marginLeft: 10 }]}>
                        <Text style={[btnInv.textColor, btnInv.btnText]}>Successes: </Text>
                        <Text style={{ color: MagePurple }}>{roll.successes}</Text>
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: 20, marginRight: 20 }}>
                    <Text style={[greyBoxCommon, { flex: 1, marginRight: 10 }]}>
                        <Text style={[btnInv.textColor, btnInv.btnText]}>Ones: </Text>
                        <Text style={{ color: MagePurple }}>{roll.ones}</Text>
                    </Text>
                    <Text style={[greyBoxCommon, { flex: 1, marginLeft: 10 }]}>
                        <Text style={[btnInv.textColor, btnInv.btnText]}>Dice: </Text>
                        <Text style={{ color: MagePurple }}><Dice rollOutcomesArray={roll.rollOutcomesArray} /></Text>
                    </Text>
                </View>
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