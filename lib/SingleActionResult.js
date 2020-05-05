export default class SingleActionResult {
    constructor(numDice, rollOutcomes, rollOutcomesArray,
        outcome, successes, ones, finalSuccesses,
        difficulty, threshold, botchType, tensType,
        usedWillpower, isFixedWithWill) {

        this.numDice = numDice;
        this.rollOutcomes = rollOutcomes;
        this.rollOutcomesArray = rollOutcomesArray;
        this.outcome = outcome;
        this.successes = successes;
        this.ones = ones;
        this.finalSuccesses = finalSuccesses;
        this.difficulty = difficulty;
        this.threshold = threshold;
        this.botchType = botchType;
        this.tensType = tensType;
        this.usedWillpower = usedWillpower;
        this.isFixedWithWill = isFixedWithWill;
    }

    isBotch() {
        return this.outcome === 'Botch';
    };

    fixWithWill() {
        if(this.outcome === 'Success') return;
        if(this.outcome === 'Botch') {
            this.isFixedWithWill = true;
            this.outcome = 'Failure'
        } else if(this.outcome === 'Failure') {
            this.isFixedWithWill = true;
            this.outcome = 'Success'
            if(this.finalSuccesses < 0) {
                this.finalSuccesses = 0;
            }

            this.finalSuccesses++;
        }
    }
}