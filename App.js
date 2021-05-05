import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainScreen from "./components/MainScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen></MainScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
