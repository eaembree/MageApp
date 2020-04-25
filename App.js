import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MageButtonSample from './MageButtonSample';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faDiceD20, faQuestionCircle, faCog, faCheck } from '@fortawesome/free-solid-svg-icons'

import BotchTensButtons from './BotchTensButtons';

function App() {
  const body = "Hello World";
  return (
      // <FontAwesomeIcon icon={ faCheck } />
      // <MageButtonSample buttonText="Hello World"/>
      <View style={{alignSelf: 'baseline'}}>
        <BotchTensButtons btnHeight={40}/>
        <Text>{body}</Text>
  
      </View>
  );
}

export default App;