import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import ViewAllRepliesNavBar from '../Components/AllReplies/ViewAllRepliesNavBar'
import ViewAllRepliesProfile from '../Components/AllReplies/ViewAllRepliesProfile'
import ViewAllRepliesQuestion from '../Components/AllReplies/ViewAllRepliesQuestion'
import ViewAllRepliesAnswers from '../Components/AllReplies/ViewAllRepliesAnswers'

const ViewAllReplies = () => {
  return (
    <>
        <ViewAllRepliesNavBar />
        <ViewAllRepliesProfile />
        <ViewAllRepliesQuestion />
        <ScrollView >
            <Text style={{marginHorizontal:28, marginTop:24, marginBottom:5, fontSize:12, fontFamily:'Nunito-SemiBold'}}>All replies</Text>
        <ViewAllRepliesAnswers />
        <ViewAllRepliesAnswers />
        <ViewAllRepliesAnswers />

        </ScrollView>
    </>
  )
}

export default ViewAllReplies

const styles = StyleSheet.create({

})