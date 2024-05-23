import { StyleSheet, View, TextInput, Text } from 'react-native';
import React from 'react';

const TextInputType2 = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
        style={styles.textInput}
        placeholder="Eg. #doctors, #ayurveda"
        placeholderTextColor="#B6B6B6"
      />
      <View style={{display: 'flex', flexDirection: 'column-reverse'}}>
        <Text style={styles.wordCount}>50 words</Text>
      </View>
      <Text style={styles.headingText}>
        Add Description
      </Text>
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
    fontFamily:'Nunito-Medium',
  },
  wordCount: {
    color: '#B6B6B6',
    fontSize: 8,
    marginBottom:14,
    fontFamily:'Nunito-Medium',
  },
  headingText: {
    position: 'absolute',
    top: -14,
    left: 11,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily:'Nunito-Medium',
    fontSize:12,
  },
});
