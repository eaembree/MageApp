import SingleActionResult from './SingleActionResult';
import { BotchOptions, TensOptions } from '../SettingsData'

export default class DiceRoller {
    constructor() {
        this.botch = BotchOptions.Original;
        this.tens = TensOptions.Regular;
    }

    setBotch(botch) {
        this.botch = botch;
    }

    setTens(tens) {
        this.tens = tens;
    }

    doubleTens(){
        return this.tens === 'double';
    }

    doRerollTens(){
        return this.tens === 'reroll';
    }

    allowBotch(){
        return this.botch !== 'none';
    }

    originalBotch(){
        return this.botch === 'original';
    }

    revM20Botch(){
        return this.botch === 'rev-m20';
    }

    emptyRollsDict(){
        return {
            1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
            6: 0, 7: 0, 8: 0, 9: 0, 10: 0
        }
    }

    mergeDiceDicts (first, second){
        let final = this.emptyRollsDict();
    
        for(let face = 1; face < 11; face++){
            final[face] = first[face] + second[face];
        }
    
        return final;
    }

    rollDie(){
        return Math.floor(Math.random() * 10) + 1;
    }

    rollSingleOutcome(num){
        let dict = this.emptyRollsDict();
        for(let i = 0; i < num; i++){
            let outcome = this.rollDie();
            dict[outcome] = dict[outcome] + 1
        }
        return dict;
    }

    rollTotalOutcome(numDice){
        let newRollDict = this.rollSingleOutcome(numDice);
        let totalRollDict = this.mergeDiceDicts(this.emptyRollsDict(), newRollDict);
    
        if(this.doRerollTens()){
            while(newRollDict[10] > 0){
                newRollDict = this.rollSingleOutcome(newRollDict[10]);
                totalRollDict = this.mergeDiceDicts(totalRollDict, newRollDict);
            }
        }
    
        return totalRollDict;
    }

    resultDictToArray(dict){
        let arr = [];
        for(let face = 10; face > 0; face--){
            for(let n = dict[face]; n > 0; n--){
                arr.push(face);
            }
        }
        return arr;
    }

    getSingleActionResult(numDice, difficulty, threshold, applyWillpower) {
        let rollOutcomes = this.rollTotalOutcome(numDice);
        let rolledSuccesses = 0;
        let ones = rollOutcomes[1];
    
        for(let face = difficulty; face < 11; face++){
            rolledSuccesses += rollOutcomes[face];
        }
    
        if(this.doubleTens()){
            rolledSuccesses += rollOutcomes[10]
        }
    
        let finalSuccesses = rolledSuccesses - ones;

        if(finalSuccesses < 0){
            finalSuccesses = 0;
        }

        let isBotch = false;

        if(applyWillpower) {
            finalSuccesses += 1;
        }

        if(finalSuccesses <= 0){
            if(this.originalBotch()){
                if(ones > rolledSuccesses) {
                    isBotch = true;
                }
            } else if(this.revM20Botch()){
                if(rolledSuccesses <= 0 && ones > 0){
                    isBotch = true;
                }
            }
        }

        let minSuccesses = threshold > 0 ? threshold : 1;
        let outcome = isBotch ? 'Botch' : (finalSuccesses >= minSuccesses ? 'Success' : 'Failure');

        return new SingleActionResult(
            numDice,
            rollOutcomes,
            this.resultDictToArray(rollOutcomes),
            outcome,
            rolledSuccesses,
            ones,
            finalSuccesses,
            difficulty,
            threshold,
            this.botch,
            this.tens,
            applyWillpower,
            false
       );
    }

    cloneActionResult(singleOutcome) {
        let clonedRollOutcomes = this.mergeDiceDicts(this.emptyRollsDict(), singleOutcome.rollOutcomes);
        let clonedRollOutcomesArray = this.resultDictToArray(clonedRollOutcomes);

        return new SingleActionResult(
            singleOutcome.numDice,
            clonedRollOutcomes,
            clonedRollOutcomesArray,
            singleOutcome.outcome,
            singleOutcome.rolledSuccesses,
            singleOutcome.ones,
            singleOutcome.finalSuccesses,
            singleOutcome.difficulty,
            singleOutcome.threshold,
            singleOutcome.botch,
            singleOutcome.tens,
            singleOutcome.applyWillpower,
            singleOutcome.isFixedWithWill
       );
    }
}