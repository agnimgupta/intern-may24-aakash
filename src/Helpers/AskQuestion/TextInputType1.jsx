import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const TextInputType1 = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (input) => {
    const words = input.trim().split(/\s+/);
    if (words.length <= 12) {
      setText(input);
      setWordCount(words[0] === "" ? 0 : words.length);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Add your question'
        placeholderTextColor='#B6B6B6'
        value={text}
        onChangeText={handleTextChange}
      />

      <Text style={styles.wordCount}>
        {wordCount > 0 ? `${wordCount}/12` : '12 words'}
      </Text>

      <Text style={styles.headingText}>
        Add Question <Text style={{color: 'red'}}>*</Text>
      </Text>
    </View>
  );
};

export default TextInputType1;

const styles = StyleSheet.create({
  mainContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    height: '100%',
    color: 'black',
    fontSize: 14,
    fontFamily: 'Nunito-Medium',
  },
  wordCount: {
    color: '#B6B6B6',
    fontSize: 8,
    fontFamily: 'Nunito-Medium',
    marginLeft: 10,
  },
  headingText: {
    position: 'absolute',
    top: -12,
    left: 12,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily: 'Nunito-Medium',
    fontSize: 12,
  },
});
