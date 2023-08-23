import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titleText}>SPIRITUAL GIFTS SURVEY</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        }}/>
      <Text style={styles.subtitleText}>DIRECTIONS</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#b0d8ff',
    backgroundColor: '#dfefff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontFamily: 'Arial, Helvetica, Monaco, Times New Roman',
    fontSize: 64,
    fontWeight: 'bold',
     // color: '#2058ff',
     color: '#000000',
     lineHeight: 80,
  },
  subtitleText: {
    fontFamily: 'Arial, Helvetica, Monaco, Times New Roman',
    fontSize: 32,
     // color: '#2058ff',
     color: '#000000',
     lineHeight: 60,
  },
});