import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';


/*

Must run "nvm install node" first before running
To start script right now use "npm start" not "expo start"

*/

export default function App() {
const [num, onChangeNumber] = React.useState('');
const [num2, onChangeNumber2] = React.useState('');
const [num3, onChangeNumber3] = React.useState('');
const [num4, onChangeNumber4] = React.useState('');
const [num5, onChangeNumber5] = React.useState('');
const [num6, onChangeNumber6] = React.useState('');
const [num7, onChangeNumber7] = React.useState('');
const [num8, onChangeNumber8] = React.useState('');
const [num9, onChangeNumber9] = React.useState('');
const [num10, onChangeNumber10] = React.useState('');
const [num11, onChangeNumber11] = React.useState('');
const [num12, onChangeNumber12] = React.useState('');
const [num13, onChangeNumber13] = React.useState('');
const [num14, onChangeNumber14] = React.useState('');
const [num15, onChangeNumber15] = React.useState('');
const [num16, onChangeNumber16] = React.useState('');
const [num17, onChangeNumber17] = React.useState('');
const [num18, onChangeNumber18] = React.useState('');
const [num19, onChangeNumber19] = React.useState('');
const [num20, onChangeNumber20] = React.useState('');
const [num21, onChangeNumber21] = React.useState('');
const [num22, onChangeNumber22] = React.useState('');
const [num23, onChangeNumber23] = React.useState('');
const [num24, onChangeNumber24] = React.useState('');
const [num25, onChangeNumber25] = React.useState('');
const [num26, onChangeNumber26] = React.useState('');
const [num27, onChangeNumber27] = React.useState('');
const [num28, onChangeNumber28] = React.useState('');
const [num29, onChangeNumber29] = React.useState('');
const [num30, onChangeNumber30] = React.useState('');
const [num31, onChangeNumber31] = React.useState('');
const [num32, onChangeNumber32] = React.useState('');
const [num33, onChangeNumber33] = React.useState('');
const [num34, onChangeNumber34] = React.useState('');
const [num35, onChangeNumber35] = React.useState('');
const [num36, onChangeNumber36] = React.useState('');
const [num37, onChangeNumber37] = React.useState('');
const [num38, onChangeNumber38] = React.useState('');
const [num39, onChangeNumber39] = React.useState('');
const [num40, onChangeNumber40] = React.useState('');
const [num41, onChangeNumber41] = React.useState('');
const [num42, onChangeNumber42] = React.useState('');
const [num43, onChangeNumber43] = React.useState('');
const [num44, onChangeNumber44] = React.useState('');
const [num45, onChangeNumber45] = React.useState('');
const [num46, onChangeNumber46] = React.useState('');
const [num47, onChangeNumber47] = React.useState('');
const [num48, onChangeNumber48] = React.useState('');
const [num49, onChangeNumber49] = React.useState('');
const [num50, onChangeNumber50] = React.useState('');
const [num51, onChangeNumber51] = React.useState('');
const [num52, onChangeNumber52] = React.useState('');
const [num53, onChangeNumber53] = React.useState('');
const [num54, onChangeNumber54] = React.useState('');
const [num55, onChangeNumber55] = React.useState('');
const [num56, onChangeNumber56] = React.useState('');
const [num57, onChangeNumber57] = React.useState('');
const [num58, onChangeNumber58] = React.useState('');
const [num59, onChangeNumber59] = React.useState('');
const [num60, onChangeNumber60] = React.useState('');
const [num61, onChangeNumber61] = React.useState('');
const [num62, onChangeNumber62] = React.useState('');
const [num63, onChangeNumber63] = React.useState('');
const [num64, onChangeNumber64] = React.useState('');
const [num65, onChangeNumber65] = React.useState('');
const [num66, onChangeNumber66] = React.useState('');
const [num67, onChangeNumber67] = React.useState('');
const [num68, onChangeNumber68] = React.useState('');
const [num69, onChangeNumber69] = React.useState('');
const [num70, onChangeNumber70] = React.useState('');
const [num71, onChangeNumber71] = React.useState('');
const [num72, onChangeNumber72] = React.useState('');
const [num73, onChangeNumber73] = React.useState('');
const [num74, onChangeNumber74] = React.useState('');
const [num75, onChangeNumber75] = React.useState('');
const [num76, onChangeNumber76] = React.useState('');
const [num77, onChangeNumber77] = React.useState('');
const [num78, onChangeNumber78] = React.useState('');
const [num79, onChangeNumber79] = React.useState('');
const [num80, onChangeNumber80] = React.useState('');

// adding '+' before the number vars to force var to be an int
const a = +num + +num2;
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

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num}
               onChangeText = {onChangeNumber}
               />
        <Text style={styles.questionText}>I have the ability to organize ideas, resources, time, and people effectively.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num2}
               onChangeText = {onChangeNumber2}
               />
        <Text style={styles.questionText}>I am willing to study and prepare for the task of teaching.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num3}
               onChangeText = {onChangeNumber3}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <Text>
          {a}
        </Text>

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
  questionBox: {
    flexDirection: 'row',
  },
  questionText: {
    fontFamily: 'Arial, Helvetica, Monaco, Times New Roman',
    fontSize: 16,
    lineHeight: 70,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#3a42f4',
    borderWidth: 3,
    width: 45,
    fontSize: 20,
    fontWeight: 'bold',
 },
});