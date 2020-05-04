import React from 'react';
import { View } from 'react-native';
import { DTButtons } from './single_components/DtButtons';
import { NumDiceButtons } from './NumDiceButtons';
import { clamp } from '../../utils/Math';

export function Single() {
    const MIN_DIFFICULTY = 2, MAX_DIFFICULTY = 10;
    const MIN_THRESHOLD = 0, MAX_THRESHOLD = 6;
    const MIN_NUM_DICE = 1, MAX_NUM_DICE = 1000;

    const DIFFICULTY_START = 5;
    const THRESHOLD_START = 5;
    const NUM_DICE_START = 3

    let [difficulty, setDifficulty] = React.useState(DIFFICULTY_START);
    let [threshold, setThreshold] = React.useState(THRESHOLD_START);
    let [numDice, setNumDice] = React.useState(NUM_DICE_START);

    const modifyDifficulty = (change) => {
        if (change == 0) return;
        let newVal = clamp(difficulty + change, MIN_DIFFICULTY, MAX_DIFFICULTY);
        if (newVal == difficulty) return;
        setDifficulty(newVal);
    }

    const modifyThreshold = (change) => {
        if (change == 0) return;
        let newVal = clamp(threshold + change, MIN_THRESHOLD, MAX_THRESHOLD);
        if (newVal == threshold) return;
        setThreshold(newVal);
    }

    const modifyNumDice = (change) => {
        if (change == 0) return;
        let newVal = clamp(numDice + change, MIN_NUM_DICE, MAX_NUM_DICE);
        if (newVal == numDice) return;
        setNumDice(newVal);
    }

    return (
        <View>
            <View style={{ marginTop: 5 }}>
                <DTButtons
                    difficulty={difficulty}
                    threshold={threshold}
                    modifyDifficulty={modifyDifficulty}
                    modifyThreshold={modifyThreshold} />
            </View>
            <View style={{ marginTop: 5 }}>
                <NumDiceButtons numDice={numDice} modifyNumDice={modifyNumDice} />
            </View>

        </View>
    );
}