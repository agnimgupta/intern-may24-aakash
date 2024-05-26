import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import ViewAllRepliesNavBar from '../Components/AllReplies/ViewAllRepliesNavBar';
import ViewAllRepliesProfile from '../Components/AllReplies/ViewAllRepliesProfile';
import ViewAllRepliesQuestion from '../Components/AllReplies/ViewAllRepliesQuestion';
import ViewAllRepliesAnswers from '../Components/AllReplies/ViewAllRepliesAnswers';
import { useRoute } from '@react-navigation/native';

const ViewAllReplies = ({navigation}) => {

  const route = useRoute();
  const {profileData, questionData} = route.params;

  const [answerButtonClicked, setanswerButtonClicked] = useState(false);

  


  return (
    <>
      <View>
        <ViewAllRepliesNavBar navigation={navigation} />

        <Pressable onPress={() =>setanswerButtonClicked(false)}>
          <ViewAllRepliesProfile answerButtonClicked={answerButtonClicked} setanswerButtonClicked={setanswerButtonClicked} profileData={profileData} />
          <ViewAllRepliesQuestion questionData={questionData} />
        </Pressable>

        {answerButtonClicked ? <Pressable style={styles.floatingBox}>
          <Pressable
            style={[
              styles.miniBox,
              {borderBottomWidth: 1, borderBottomColor: '#EDEDED'},
            ]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/SavePost.png')}
            />
            <Text style={[styles.boxText, {marginRight: 14}]}>Save Post</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('AddAnswer',{ profileData, questionData})}  style={[styles.miniBox]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/AddAnswer.png')}
            />
            <Text style={[styles.boxText, {marginRight: 4}]}>Add Answer</Text>
          </Pressable>
          <Pressable
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/Report.png')}
            />
            <Text style={[styles.boxText, {marginRight: 35}]}>Report</Text>
          </Pressable>
        </Pressable>: <View></View>}
      </View>



      <ScrollView>
        <Text
          style={{
            marginHorizontal: 28,
            marginTop: 24,
            marginBottom: 5,
            fontSize: 12,
            fontFamily: 'Nunito-SemiBold',
          }}>
          All replies
        </Text>
        <ViewAllRepliesAnswers />
        <ViewAllRepliesAnswers />
        <ViewAllRepliesAnswers />
      </ScrollView>
    </>
  );
};

export default ViewAllReplies;

const styles = StyleSheet.create({
  floatingBox: {
    height: 105,
    width: 148,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 224,
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
    paddingVertical: 2,
    display: 'flex',
    justifyContent: 'space-around',
    zIndex: 100,
  },
  miniBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 32,
  },
  boxImage: {
    height: 16,
    width: 15,
    resizeMode: 'contain',
  },
  boxText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#1E1E1E',
  },
});
