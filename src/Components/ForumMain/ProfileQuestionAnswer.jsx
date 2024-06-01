import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import ForumProfile from '../../Helpers/ForumMain/ForumProfile';
import ForumQuestion from '../../Helpers/ForumMain/ForumQuestion';
import ForumAnswerBox from '../../Helpers/ForumMain/ForumAnswerBox';
import LoveShareComment from '../../Helpers/ForumMain/LoveShareComment';

const ProfileQuestionAnswer = ({index, navigation, setVisible}) => {
  const [isCliked, setisCliked] = useState(false);

  const profileData = {
    name: 'Mathew Adams',
    following: true,
    daysAgo: 5,
  };

  const questionData = 'Q. Can Ayurveda help with stress and mental health issues?';
  
  return (
    <>
      <Pressable onPress={() => setisCliked(false)} style={styles.mainContainer}>
        <ForumProfile isCliked={isCliked} setisCliked={setisCliked} profileData={profileData} />
        <ForumQuestion index={index} questionData={questionData} />
        <ForumAnswerBox />

        {index % 2 == 0 ? (
          <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
            <Pressable onPress={() => navigation.navigate('ViewAllReplies', {profileData, questionData})}>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  fontSize: 11,
                  color: '#3A643B',
                }}>
                View All Replies
              </Text>
            </Pressable>
          </View>
        ) : (
          <View></View>
        )}
      </Pressable>
      <LoveShareComment />

      {isCliked ? <Pressable style={styles.floatingBox}>
        <TouchableOpacity style={[styles.miniBox, {borderBottomWidth:1, borderBottomColor:'#EDEDED'}]}>
          <Image style={styles.boxImage} source={require('../../assets/Images/SavePost.png')} />
          <Text style={[styles.boxText, {marginRight:14}]}>Save Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddAnswer', {profileData,questionData})} style={[styles.miniBox, ]}>
          <Image style={styles.boxImage} source={require('../../assets/Images/AddAnswer.png')} />
          <Text style={[styles.boxText,{marginRight:4}]}>Add Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)} style={[styles.miniBox, {borderTopWidth:1, borderTopColor:'#EDEDED'} ]}>
          <Image style={styles.boxImage} source={require('../../assets/Images/Report.png')} />
          <Text style={[styles.boxText,{marginRight:35}]}>Report</Text>
        </TouchableOpacity>
      </Pressable>: <View></View>}
    </>
  );
};

export default ProfileQuestionAnswer;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    paddingHorizontal: 28,
  },
  floatingBox: {
    height: 105,
    width: 150,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 30,
    right: 32,
    borderRadius: 8,
    elevation: 5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    paddingVertical:2,
    display:'flex',
    justifyContent:'space-around'
  },
  miniBox :{
    display:'flex',
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:32,
  },
  boxImage: {
    height:16,
    width:15,
    resizeMode:'contain'
  },
  boxText:{
    fontFamily:'Nunito-Regular',
    fontSize:12,
    color:'#1E1E1E',
  }
 
});
