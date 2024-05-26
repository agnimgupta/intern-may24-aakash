import { StyleSheet, View, TextInput, Text } from 'react-native';
import React, { useState } from 'react';

const TextInputType2 = ({name, placeholder}) => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = input => {
    const words = input.trim().split(/\s+/);
    if (words.length <= 12) {
      setText(input);
      setWordCount(words[0] === '' ? 0 : words.length);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#B6B6B6"
        onChangeText={handleTextChange}
        value={text}
      />
      <View style={{display: 'flex', flexDirection: 'column-reverse'}}>

        {wordCount > 0 ? (
          <Text style={[styles.wordCount, {marginLeft:25}]}>{wordCount}/50</Text>
        ) : (
          <Text style={styles.wordCount}>50 words</Text>
        )}
      </View>
      <Text style={styles.headingText}>{name}</Text>
    </View>
  );
};

export default TextInputType2;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 28,
  },
  textInput: {
    height: '100%',
    width: '84%',
    paddingLeft: 14,
    color: 'black',
    fontSize: 14,
    textAlign: 'auto',
    marginVertical: 10,
    fontFamily: 'Nunito-Medium',
  },
  wordCount: {
    color: '#B6B6B6',
    fontSize: 8,
    marginBottom: 11,
    fontFamily: 'Nunito-Medium',
    marginLeft:6,
  },
  headingText: {
    position: 'absolute',
    top: -14,
    left: 11,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily: 'Nunito-Medium',
    fontSize: 12,
  },
});
