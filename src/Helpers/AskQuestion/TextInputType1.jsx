import { StyleSheet, View, TextInput, Text } from 'react-native'
import React from 'react'

const TextInputType1 = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.textInput} placeholder='Add your question' placeholderTextColor='#B6B6B6' />
      <Text style={styles.wordCount}>12 words</Text>
      <Text style={styles.headingText}>Add Question <Text style={{color:'red'}}>*</Text></Text>
    </View>
  )
}

export default TextInputType1

const styles = StyleSheet.create({
  mainContainer: {
    height:52,
    borderWidth:1,
    borderColor:'#D6D6D6',
    borderRadius:16,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:36,
  },
  textInput:{
    height:'100%',
    width:'84%',
    paddingLeft:17,
    color:'black',
    fontSize:14,
    fontFamily:'Nunito-Medium'
  },
  wordCount: {
    color:'#B6B6B6',
    fontSize:8,
    flex:1,
    fontFamily:'Nunito-Medium',
  },
  headingText:{
    position:'absolute',
    top:-12,
    left:12,
    backgroundColor:'white',
    paddingHorizontal:5,
    color:'#000',
    fontFamily:'Nunito-Medium',
    fontSize:12,
  }
})