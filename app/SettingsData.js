import React from 'react';

export const TensOptions = {
  Regular: 'regular',
  Double: 'double',
  Reroll: 'reroll'
}

export const BotchOptions = {
  None: 'none',
  Original: 'original',
  RevisedM20: 'rev-m20'
}

export function getBotchText(type){
  switch(type) {
      case BotchOptions.Original:
          return "Original";
      case BotchOptions.RevisedM20:
          return "Revised/M20";
      case BotchOptions.None:
          return "None";
      default:
          return "ERROR!";
  }
}

export function getTensText(type){
  switch(type) {
      case TensOptions.Regular:
          return "Regular 10s";
      case TensOptions.Reroll:
          return "Reroll 10s";
      case TensOptions.Double:
          return "10s Double";
      default:
          return "ERROR!";
  }
}

export const SettingsContext = React.createContext({
  tensOption: TensOptions.Regular,
  botchOption: BotchOptions.Original,
  showBotchTensButtons: true,
  allowBotchFixWithWillpower: true,
  allowFailureFixWithWillpower: true,

  setTensOption: () => {},
  setBotchOption: () => {},
  setShowBotchTensButtons: () => {},
  setAllowBotchFixWithWillpower: () => {},
  setAllowFailureFixWithWillpower: () => {},
});