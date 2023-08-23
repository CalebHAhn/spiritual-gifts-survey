import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

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
      <Text style={styles.baseText}>This is not a test, so there are no wrong answers. The Spiritual Gifts Survey consists of 80 statements. Some items reflect concrete actions, 
        other items are descriptive traits, and still others are statements of belief.</Text>
      <FlatList
          data={[
            { key: 'Select the one response you feel best characterizes yourself and place that number in the blank provided. Record your answer in the blank beside each item.' },
            { key: 'Do not spend too much time on any one item. Remember, it is not a test. Usually your immediate response is best.' },
            { key: 'Please give an answer for each item. Do not skip any items.' },
            { key: 'Do not ask others how they are answering or how they think you should answer.' },
            { key: 'Work at your own pace.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, lineHeight: 15 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        <Text style={styles.baseText}>Your response choices are:</Text>
        <Text style={styles.baseText}>5 — Highly characteristic of me/definitely true for me</Text>
        <Text style={styles.baseText}>4 — Most of the time this would describe me/be true for me</Text>
        <Text style={styles.baseText}>3 — Frequently characteristic of me/true for me–about 50 percent of the time</Text>
        <Text style={styles.baseText}>2 — Occasionally characteristic of me/true for me–about 25 percent of the time</Text>
        <Text style={styles.baseText}>1 — Not at all characteristic of me/definitely untrue for me</Text>
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        }}/>
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
    fontFamily: 'Arial, Helvetica, Monaco, Times New Roman',
    fontSize: 14,
     // color: '#2058ff',
     color: '#000000',
     lineHeight: 40,
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