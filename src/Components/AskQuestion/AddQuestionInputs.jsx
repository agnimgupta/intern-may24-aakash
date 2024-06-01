import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextInputType1 from '../../Helpers/AskQuestion/TextInputType1'
import TextInputType2 from '../../Helpers/AskQuestion/TextInputType2'
import UploadDocumentInput from '../../Helpers/AskQuestion/UploadDocumentInput'

const AddQuestionInputs = ({questionFilled}) => {
  return (
    <View>
      <TextInputType1 questionFilled={questionFilled} />
      <TextInputType2 placeholder="Eg. #doctors, #ayurveda" name="Add Description" />
      <UploadDocumentInput/>
    </View>
  )
}

export default AddQuestionInputs

const styles = StyleSheet.create({})