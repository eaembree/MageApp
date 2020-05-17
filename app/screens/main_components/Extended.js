import React from 'react';
import { ExtendedBody } from './extended_components/ExtendedBody';
import { clamp } from '../../utils/Math';

export function Extended() {
    const MIN_DIFFICULTY = 2, MAX_DIFFICULTY = 10;
    const MIN_NUM_ROLLS = 2, MAX_NUM_ROLLS = 1000;
    const MIN_NUM_DICE = 1, MAX_NUM_DICE = 1000;
    const MIN_SUCCESSES_NEEDED_DICE = 1, MAX_SUCCESSES_NEEDED_DICE = 1000;

    const DIFFICULTY_START = 6;
    const NUM_ROLLS_START = 2;
    const NUM_DICE_START = 3;
    const ROLLS_UNLIMITED_START = false;
    const SUCCESSES_NEEDED_START = 1;

    let [difficulty, setDifficulty] = React.useState(DIFFICULTY_START);
    let [numRolls, setNumRolls] = React.useState(NUM_ROLLS_START);
    let [rollsUnlimited, setRollsUnlimited] = React.useState(ROLLS_UNLIMITED_START);
    let [numDice, setNumDice] = React.useState(NUM_DICE_START);
    let [successesNeeded, setSuccessesNeeded] = React.useState(SUCCESSES_NEEDED_START)

    let [rollingStarted, setRollingStarted] = React.useState(false);

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

    const modifySuccessesNeeded = (change) => {
        if (change == 0) return;
        let newVal = clamp(successesNeeded + change, MIN_SUCCESSES_NEEDED_DICE, MAX_SUCCESSES_NEEDED_DICE);
        if (newVal == successesNeeded) return;
        setSuccessesNeeded(newVal);
    }

    const toggleRollsUnlimited = () => {
        setRollsUnlimited(!rollsUnlimited);
    }

    const startRolling = () => {
        setRollingStarted(true);
    }

    const stopRolling = () => {
        setRollingStarted(false);
    }

    return (
        <ExtendedBody
            rollingStarted={rollingStarted}
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
            startRolling={startRolling}stopRolling
            stopRolling={stopRolling}/>
        
    );
}
