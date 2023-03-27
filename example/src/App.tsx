import * as React from 'react';

import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  PipView from 'react-native-pip';
import {
  UIManager,
  findNodeHandle
} from "react-native";

export default function App() {

  var pipRef = React.useRef(null); 

  const toggle = () => {
   pipRef?.current?.updateFromManager(20)
  }

  return (
    <View style={styles.container}>
      <PipView ref={pipRef}>
        <View style={{width:100, height:100, backgroundColor:'red'}}></View>
      </PipView>

      <TouchableOpacity onPress={toggle} style={{width:100, height:100, backgroundColor:'blue'}}>

        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
