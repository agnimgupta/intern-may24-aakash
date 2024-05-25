import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForumQuestion = ({index}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.question}>Q. Can Ayurveda help with stress and mental health issues? </Text>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',marginTop:15}}>
        <Text style={styles.replies}>Replies </Text>
        {index%2!==0 ? <Text style={styles.reply}> • 1 reply</Text> : <Text style={styles.reply}> • 3 replies</Text> }
      </View>
    </View>
  )
}

export default ForumQuestion

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:10,
    },
    
    question: {
        fontFamily:"Nunito-SemiBold",
        fontSize:15,
        color:'#000000'
    },
    replies: {
        fontSize:12,
        fontFamily:'Nunito-SemiBold',
        color:'#8D8D8D',
    },
    reply:{
        fontSize:12,
        fontFamily:'Nunito-SemiBold',
        color:"#3A643B"
    }

})