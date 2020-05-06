import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DTButtons } from './extended_components/DtButtons';
import { clamp } from '../../utils/Math';

export function Extended() {
    const MIN_DIFFICULTY = 2, MAX_DIFFICULTY = 10;
    const MIN_NUM_ROLLS = 2, MAX_NUM_ROLLS = 1000;
    const MIN_NUM_DICE = 1, MAX_NUM_DICE = 1000;

    const DIFFICULTY_START = 6;
    const NUM_ROLLS_START = 2;
    const NUM_DICE_START = 3

    let [difficulty, setDifficulty] = React.useState(DIFFICULTY_START);
    let [numRolls, setNumRolls] = React.useState(NUM_ROLLS_START);
    let [numDice, setNumDice] = React.useState(NUM_DICE_START);

    const modifyDifficulty = (change) => {
        if (change == 0) return;
        let newVal = clamp(difficulty + change, MIN_DIFFICULTY, MAX_DIFFICULTY);
        if (newVal == difficulty) return;
        setDifficulty(newVal);
    }

    const modifyNumRolls = (change) => {
        if (change == 0) return;
        let newVal = clamp(numRolls + change, MIN_NUM_ROLLS, MAX_NUM_ROLLS);
        if (newVal == numRolls) return;
        setNumRolls(newVal);
    }

    const modifyNumDice = (change) => {
        if (change == 0) return;
        let newVal = clamp(numDice + change, MIN_NUM_DICE, MAX_NUM_DICE);
        if (newVal == numDice) return;
        setNumDice(newVal);
    }

    return (
        <View>
            <View>
                <DTButtons
                    difficulty={difficulty}
                    numRolls={numRolls}
                    modifyDifficulty={modifyDifficulty}
                    modifyNumRolls={modifyNumRolls} />
            </View>

            <Text>{"Extended"}</Text>
        </View>
    );
}