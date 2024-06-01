import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import ProfileDetails from '../Components/AddAnswer/ProfileDetails';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AddAnswerQuestion from '../Components/AddAnswer/AddAnswerQuestion';
import TextInputType2 from '../Helpers/AskQuestion/TextInputType2';
import UploadDocumentInput from '../Helpers/AskQuestion/UploadDocumentInput';
import ProceedButton from '../Components/AskQuestion/ProceedButton';

const AddAnswer = ({navigation}) => {
  const route = useRoute();
  const {profileData, questionData} = route.params;
  return (
    <View style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon icon={faArrowLeft} size={22} />
          </TouchableOpacity>
          <Text style={styles.headingText}>Write answer</Text>
        </View>
        <ProfileDetails />
        <AddAnswerQuestion questionData={questionData} />
        <View style={{marginTop: 28}}>
          <TextInputType2 name="Add Answer" placeholder="Write your answer" />
          <UploadDocumentInput />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AddAnswerCongratulations')}>
        <ProceedButton />
      </TouchableOpacity>
    </View>
  );
};

export default AddAnswer;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 28,
    paddingTop: 16,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  firstContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  headingText: {
    fontWeight: '400',
    color: 'black',
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Nunito-Medium',
  },
});
