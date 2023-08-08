import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={title}>Spiritual Gifts Survey</Text>
      <Text>Church</Text>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
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
const title = { 
    fontFamily: "Times New Roman",
    fontSize: 36,
};
