/**
 * Screenshot Protect Demo App
 * Author: MC Naveen
 * Website: https://webcheerz.com
 * GitHub: 
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
         <Text style={styles.HelloText}>Hello World, This is a Sample Text for Screenshot Protect Demo App</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HelloText: {
      textAlign: 'center', // <-- the magic
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 50,
      margin: 50,
      color: 'black'
  }
});

export default App;
