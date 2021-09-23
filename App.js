// In App.js in a new project

import * as React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation'


function App() {
  return (
   <SafeAreaView style={styles.Maincontainer}>
      <AppNavigation />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    minHeight:"100%",
    minWidth:"100%",
    padding:10
  }
});
export default App;