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

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num4}
               onChangeText = {onChangeNumber4}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num5}
               onChangeText = {onChangeNumber5}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num6}
               onChangeText = {onChangeNumber6}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num7}
               onChangeText = {onChangeNumber7}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num8}
               onChangeText = {onChangeNumber8}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num9}
               onChangeText = {onChangeNumber9}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num10}
               onChangeText = {onChangeNumber10}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num11}
               onChangeText = {onChangeNumber11}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num12}
               onChangeText = {onChangeNumber12}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num13}
               onChangeText = {onChangeNumber13}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num14}
               onChangeText = {onChangeNumber14}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num15}
               onChangeText = {onChangeNumber15}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num16}
               onChangeText = {onChangeNumber16}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num17}
               onChangeText = {onChangeNumber17}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num18}
               onChangeText = {onChangeNumber18}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num19}
               onChangeText = {onChangeNumber19}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num20}
               onChangeText = {onChangeNumber20}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num21}
               onChangeText = {onChangeNumber21}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num22}
               onChangeText = {onChangeNumber22}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num23}
               onChangeText = {onChangeNumber23}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num24}
               onChangeText = {onChangeNumber24}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num25}
               onChangeText = {onChangeNumber25}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num26}
               onChangeText = {onChangeNumber26}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num27}
               onChangeText = {onChangeNumber27}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num28}
               onChangeText = {onChangeNumber28}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num29}
               onChangeText = {onChangeNumber29}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num30}
               onChangeText = {onChangeNumber30}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num31}
               onChangeText = {onChangeNumber31}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num32}
               onChangeText = {onChangeNumber32}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num33}
               onChangeText = {onChangeNumber33}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num34}
               onChangeText = {onChangeNumber34}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num35}
               onChangeText = {onChangeNumber35}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num36}
               onChangeText = {onChangeNumber36}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num37}
               onChangeText = {onChangeNumber37}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num38}
               onChangeText = {onChangeNumber38}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num39}
               onChangeText = {onChangeNumber39}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num40}
               onChangeText = {onChangeNumber40}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num41}
               onChangeText = {onChangeNumber41}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num42}
               onChangeText = {onChangeNumber42}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num43}
               onChangeText = {onChangeNumber43}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num44}
               onChangeText = {onChangeNumber44}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num45}
               onChangeText = {onChangeNumber45}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num46}
               onChangeText = {onChangeNumber46}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num47}
               onChangeText = {onChangeNumber47}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num48}
               onChangeText = {onChangeNumber48}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num49}
               onChangeText = {onChangeNumber49}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num50}
               onChangeText = {onChangeNumber50}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num51}
               onChangeText = {onChangeNumber51}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num52}
               onChangeText = {onChangeNumber52}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num53}
               onChangeText = {onChangeNumber53}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num54}
               onChangeText = {onChangeNumber54}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num55}
               onChangeText = {onChangeNumber55}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num56}
               onChangeText = {onChangeNumber56}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num57}
               onChangeText = {onChangeNumber57}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num58}
               onChangeText = {onChangeNumber58}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num59}
               onChangeText = {onChangeNumber59}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num60}
               onChangeText = {onChangeNumber60}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num61}
               onChangeText = {onChangeNumber61}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num62}
               onChangeText = {onChangeNumber62}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num63}
               onChangeText = {onChangeNumber63}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num64}
               onChangeText = {onChangeNumber64}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num65}
               onChangeText = {onChangeNumber65}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num66}
               onChangeText = {onChangeNumber66}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num67}
               onChangeText = {onChangeNumber67}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num68}
               onChangeText = {onChangeNumber68}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num69}
               onChangeText = {onChangeNumber69}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num70}
               onChangeText = {onChangeNumber70}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num71}
               onChangeText = {onChangeNumber71}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num72}
               onChangeText = {onChangeNumber72}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num73}
               onChangeText = {onChangeNumber73}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num74}
               onChangeText = {onChangeNumber74}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num75}
               onChangeText = {onChangeNumber75}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num76}
               onChangeText = {onChangeNumber76}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num77}
               onChangeText = {onChangeNumber77}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num78}
               onChangeText = {onChangeNumber78}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num79}
               onChangeText = {onChangeNumber79}
               />
        <Text style={styles.questionText}>I am able to relate the truths of God to specific situations.</Text>
        </View>

        <View style={styles.questionBox}>
            <TextInput style = {styles.input}
               placeholder = ''
               autoCapitalize = "none"
               value={num80}
               onChangeText = {onChangeNumber80}
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