const TensOptions = {
    Regular: 'regular',
    Double: 'double',
    Reroll: 'reroll'
}

const BotchOptions = {
    None: 'none',
    Original: 'original',
    RevisedM20: 'rev-m20'
}

export class AppState {
    constructor(){
        this.tensOption = TensOptions.Regular;
        this.botchOptions = BotchOptions.Original;
        this.showBotchTensButtons = true;
        this.allowBotchFixWithWillpower = true;
        this.allowFailureFixWithWillpower = true;
    }
}