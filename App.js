/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const NomeUser = (props) => {
  return (
    <View style={style.row}>
      <Text>{props.firstName}</Text>
      <Text>{props.lastName}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={style.container}>
      <NomeUser firstName="Natanael" lastName="Diego" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default App;
