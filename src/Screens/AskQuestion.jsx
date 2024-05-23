import { StyleSheet, Text, View, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import ProfileDetails from '../Components/AskQuestion/ProfileDetails'
import AddQuestionInputs from '../Components/AskQuestion/AddQuestionInputs'
import Visibility from '../Components/AskQuestion/Visibility'
import ProceedButton from '../Components/AskQuestion/ProceedButton'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const {height, width} = Dimensions.get("window")

const AskQuestion = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.firstContainer}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}><FontAwesomeIcon icon={faArrowLeft} size={22} /></Pressable>
      <Text style={styles.headingText}>Ask your question</Text>
      </View>
      <ProfileDetails/>
      <AddQuestionInputs />
      <Visibility/>
      <ProceedButton />
    </ScrollView>
  )
}

export default AskQuestion

const styles = StyleSheet.create({
    mainContainer: {
        height:height,
        paddingHorizontal:28,
        paddingTop:16,
        backgroundColor:'white',
      },
      firstContainer: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:12,
      },
      headingText: {
        fontWeight:'400',
        color:'black',
        fontSize:16,
        marginLeft:15,
        fontFamily:'Nunito-Medium'
      }
})