import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const AddAnswerQuestion = ({questionData}) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.question}>
          {questionData}
        </Text>
      </View>
  )
}

export default AddAnswerQuestion

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },

  question: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: '#000000',
  },
})