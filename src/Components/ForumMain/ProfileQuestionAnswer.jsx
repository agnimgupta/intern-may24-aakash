import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

import ForumProfile from '../../Helpers/ForumMain/ForumProfile';
import ForumQuestion from '../../Helpers/ForumMain/ForumQuestion';
import ForumAnswerBox from '../../Helpers/ForumMain/ForumAnswerBox';
import LoveShareComment from '../../Helpers/ForumMain/LoveShareComment';

const ProfileQuestionAnswer = ({index, navigation}) => {
  return (
    <>
    <View style={styles.mainContainer}>
      <ForumProfile />
      <ForumQuestion index={index} />
      <ForumAnswerBox />

      {index%2==0 ? <View style={{width:'100%', alignItems:'center', marginTop:15}}>
        <Pressable onPress={() => navigation.navigate("ViewAllReplies")}><Text style={{fontFamily:'Nunito-Bold', fontSize:11, color:'#3A643B'}}>View All Replies</Text></Pressable>
      </View>:<View></View>}

      
    </View>
    <LoveShareComment />
    </>
  );
};

export default ProfileQuestionAnswer;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    paddingHorizontal: 28,
  },
});
