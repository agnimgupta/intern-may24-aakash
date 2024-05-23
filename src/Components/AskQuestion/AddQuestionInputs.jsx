import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextInputType1 from '../../Helpers/AskQuestion/TextInputType1'
import TextInputType2 from '../../Helpers/AskQuestion/TextInputType2'
import UploadDocumentInput from '../../Helpers/AskQuestion/UploadDocumentInput'

const AddQuestionInputs = () => {
  return (
    <View>
      <TextInputType1 />
      <TextInputType2 />
      <UploadDocumentInput/>
    </View>
  )
}

export default AddQuestionInputs

const styles = StyleSheet.create({})