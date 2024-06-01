import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import ViewAllRepliesNavBar from '../Components/AllReplies/ViewAllRepliesNavBar';
import ViewAllRepliesProfile from '../Components/AllReplies/ViewAllRepliesProfile';
import ViewAllRepliesQuestion from '../Components/AllReplies/ViewAllRepliesQuestion';
import ViewAllRepliesAnswers from '../Components/AllReplies/ViewAllRepliesAnswers';
import { useRoute } from '@react-navigation/native';
import FloatBtnAskQuestion from '../Components/ForumMain/FloatBtnAskQuestion';
import BottomSheetButtons from '../Helpers/BottomSheet/BottomSheetButtons';

const ViewAllReplies = ({navigation}) => {

  const route = useRoute();
  const {profileData, questionData} = route.params;

  const [answerButtonClicked, setanswerButtonClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const [button, showButton] = useState(false);

  


  return (
    <View style={{flex:1}}>
      <View>
        <ViewAllRepliesNavBar navigation={navigation} />

        <Pressable onPress={() =>setanswerButtonClicked(false)}>
          <ViewAllRepliesProfile answerButtonClicked={answerButtonClicked} setanswerButtonClicked={setanswerButtonClicked} profileData={profileData} setVisible={setVisible} />
          <ViewAllRepliesQuestion questionData={questionData} />
        </Pressable>

        {answerButtonClicked ? <Pressable style={styles.floatingBox}>
          <TouchableOpacity
            style={[
              styles.miniBox,
              {borderBottomWidth: 1, borderBottomColor: '#EDEDED'},
            ]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/SavePost.png')}
            />
            <Text style={[styles.boxText, {marginRight: 14}]}>Save Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddAnswer',{ profileData, questionData})}  style={[styles.miniBox]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/AddAnswer.png')}
            />
            <Text style={[styles.boxText, {marginRight: 4}]}>Add Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => setVisible(true)}
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}>
            <Image
              style={styles.boxImage}
              source={require('../assets/Images/Report.png')}
            />
            <Text style={[styles.boxText, {marginRight: 35}]}>Report</Text>
          </TouchableOpacity>
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
        <ViewAllRepliesAnswers setVisible={setVisible} />
        <ViewAllRepliesAnswers setVisible={setVisible} />
        <ViewAllRepliesAnswers setVisible={setVisible} />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('AddAnswer', {profileData, questionData})}><FloatBtnAskQuestion navigation={navigation} name="Answer" /></TouchableOpacity>

      <Modal transparent={true} animationType="slide" visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setVisible(false)} style={{paddingTop: 10, alignItems: 'center'}}>
              <View
                style={{
                  borderTopWidth: 2,
                  borderColor: '#D6D6D6',
                  width: 40,
                }}></View>
            </TouchableOpacity>
            <View style={{marginTop: 15}}>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 16,
                  color: '#000000',
                }}>
                Report
              </Text>

              <Text
                style={{
                  fontFamily: 'Nunito-Medium',
                  fontSize: 15,
                  color: '#000000',
                  marginTop: 14,
                }}>
                Please select the appropriate problem to continue
              </Text>
            </View>

            <View style={{width: '76%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Offensive" button={button} showButton={showButton} />
                <BottomSheetButtons name="Inaccurate" button={button} showButton={showButton} />
              </View>
            </View>

            <View style={{width: '76%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Plagiarism" button={button} showButton={showButton} />
                <BottomSheetButtons name="Violation" button={button} showButton={showButton}  />
              </View>
            </View>

            <View style={{width: '80%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Disrespectful" button={button} showButton={showButton} />
                <BottomSheetButtons name="Terrorism" button={button} showButton={showButton} />
              </View>
            </View>

            <View style={{width: '80%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Inappropriate Content" button={button} showButton={showButton}  />
              </View>
            </View>

            {button ? <TouchableOpacity style={styles.buttonContainer}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'Nunito-SemiBold',
                }}>
                Submit
              </Text>
            </TouchableOpacity> : <View></View>}
          </View>
        </View>
      </Modal>
    </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000020',
  },
  modalView: {
    paddingHorizontal: 35,
    backgroundColor: 'white',
    height: '54%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    height: 58,
    width: '100%',
    backgroundColor: '#3A643B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 45,
  },
});
