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

export const SettingsContext = React.createContext({
  tensOption: TensOptions.Regular,
  botchOption: BotchOptions.Original,
  showBotchTensButtons: true,
  allowBotchFixWithWillpower: true,
  allowFailureFixWithWillpower: true,

  setTensOption: () => {},
  setBotchOption: () => {},
  toggleShowBotchTensButtons: () => {},
  toggleAllowBotchFixWithWillpower: () => {},
  toggleAllowFailureFixWithWillpower: () => {},
});