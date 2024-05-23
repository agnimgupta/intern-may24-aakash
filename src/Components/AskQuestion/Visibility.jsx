import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VisibilityInput from '../../Helpers/AskQuestion/VisibilityInput'

const Visibility = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Visibility</Text>
        <Text style={styles.description}>Choose how your answer will be visible in the community</Text>
        <VisibilityInput/>
    </View>
  )
}

export default Visibility

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:36,
    },
    mainText: {
        fontSize:16,
        fontWeight:'400',
        color:'#000',
        fontFamily:'Nunito-Medium',

    },
    description:{
        marginTop:10,
        color:'#5A5A5A',
        fontSize:14,
        fontFamily:'Nunito-Regular'
    }
})