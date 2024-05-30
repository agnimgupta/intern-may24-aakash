import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FloatBtnAskQuestion = ({navigation, name}) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.btnText}>{name}</Text>
    </View>
  );
};

export default FloatBtnAskQuestion;

const styles = StyleSheet.create({
  boxContainer: {
    width: 141,
    height: 40,
    backgroundColor: '#3A643B',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 22,
    right: 30,
  },
  btnText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
