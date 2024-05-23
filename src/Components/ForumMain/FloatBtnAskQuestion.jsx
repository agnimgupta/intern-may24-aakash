import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FloatBtnAskQuestion = ({navigation}) => {
  return (
    <View style={{height:"100%"}}>
      <Pressable
        onPress={() => navigation.navigate('AskQuestion')}
        style={styles.mainContainer}>
        <Text style={styles.btnText}>Ask Question</Text>
      </Pressable>
    </View>
  );
};

export default FloatBtnAskQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    width: 141,
    height: 40,
    backgroundColor: '#3A643B',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top:400,
    right:30,
  },
  btnText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
