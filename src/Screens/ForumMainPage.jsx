import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView, Modal,
  Text,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import Navbar from '../Components/ForumMain/Navbar';
import TopFeedSearchButtons from '../Components/ForumMain/TopFeedSearchButtons';
import ProfileQuestionAnswer from '../Components/ForumMain/ProfileQuestionAnswer';
import { categories } from '../../categories';
import FloatBtnAskQuestion from '../Components/ForumMain/FloatBtnAskQuestion';
import BottomSheetButtons from '../Helpers/BottomSheet/BottomSheetButtons';
const {height, width} = Dimensions.get('window');

const ForumMainPage = ({navigation}) => {
  const [button, showButton] = useState(0);
  const [visible, setVisible] = useState(false);
  
  return (
    <View style={styles.mainContainer}>
      <Navbar />
      <TopFeedSearchButtons />

      <ScrollView style={{flex: 1, zIndex: -1}}>
        {categories.map(category => {
          return (
            <View
              key={category.id}
              style={{backgroundColor: '#fff', marginBottom: 3}}
              showsVerticalScrollIndicator={false}>
              <ProfileQuestionAnswer
                index={category.id}
                navigation={navigation}
                setVisible={setVisible}
              />
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('AskQuestion')}>
        <FloatBtnAskQuestion navigation={navigation} name="Ask Question" />
      </TouchableOpacity>

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
                <BottomSheetButtons name="Offensive" button={button} showButton={showButton}/>
                <BottomSheetButtons name="Inaccurate" button={button} showButton={showButton}/>
              </View>
            </View>

            <View style={{width: '76%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Plagiarism" button={button} showButton={showButton}/>
                <BottomSheetButtons name="Violation"  button={button} showButton={showButton}/>
              </View>
            </View>

            <View style={{width: '80%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Disrespectful" button={button} showButton={showButton}/>
                <BottomSheetButtons name="Terrorism" button={button} showButton={showButton}/>
              </View>
            </View>

            <View style={{width: '80%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <BottomSheetButtons name="Inappropriate Content"  button={button} showButton={showButton}/>
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

export default ForumMainPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
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
