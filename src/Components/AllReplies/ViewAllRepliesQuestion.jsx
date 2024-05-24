import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ViewAllRepliesQuestion = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.question}>
          Q. Can Ayurveda help with stress and mental health issues?{' '}
        </Text>
      </View>
      <View style={{borderWidth:1.5, borderColor:'#EDEDED', marginTop:22}}></View>
    </View>
  );
};

export default ViewAllRepliesQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 12,
    paddingHorizontal: 28,
  },

  question: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: '#000000',
  },
  replies: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#8D8D8D',
  },
  reply: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#3A643B',
  },
});
