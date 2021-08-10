/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import React from 'react';
import type {Node} from 'react';
import Mesglog from "mesglog";
//import Mesglog from "meslog-module";

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  Mesglog.getDeviceID((response)=>{

    console.log("Result getDeviceID : "+ response);
  });
  const [ result , textChange ] = useState("data");
  const [ appid , appidChange ] = useState("000");
  const [ nd , ndChange ] = useState("abc");
 //Mesglog.getLibVersion()
 const onPress = () => {
  Mesglog.getDeviceID((response)=>{
    textChange(response)
    console.log("Result getDeviceID : "+ response);
  });
};
  const btngetVersion = () => {
    
    Mesglog.getLibVersion((response)=>{
      textChange(response)
      console.log("Result getLibVersion : "+ response);
    });
  };
  const btnhandleAppOpen = () => {
    
    Mesglog.handlerAppOpen((response)=>{
      textChange(response)
      console.log("Result handlerAppOpen : "+ response);
    });
  };
  const btnhandleAppQuit = () => {
    
    Mesglog.handlerAppQuit((response)=>{
      textChange(response)
      console.log("Result handlerAppQuit : "+ response);
    });
  };
  const btnsendLogResource = () => {
    Mesglog.sendLogResource("sdfsdf","sdfsd",(response)=>{
      textChange(response)
      console.log("Result sendLogResource : "+ response);
    });
  };
  return (
    <View>
      <Text style={styles.Text}>
        result:{result}
      </Text>
      <Button title="getDeviceID"
              onPress={onPress}
      />
      <Button title="getLibVersion"
              onPress={btngetVersion}
      />
      <Button title="nhandleAppOpen"
              onPress={btnhandleAppOpen}
      />
      <Button title="handleAppQuit"
              onPress={btnhandleAppQuit}
      />
        <Button title="sendLogResource"
              onPress={btnsendLogResource}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Text:{
    marginTop:50,
    textAlign: 'center',
    fontSize:30
  }
});

export default App;
