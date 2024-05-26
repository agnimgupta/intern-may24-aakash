import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProceedButton = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color:'white', fontSize:15, fontFamily:'Nunito-SemiBold'}}>Save and proceed</Text>
    </View>
  )
}

export default ProceedButton

const styles = StyleSheet.create({
    mainContainer: {
        height:58,
        width:'100%',
        backgroundColor:'#3A643B',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:90, 
        marginBottom:25,
    }
})