import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView, TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import ProfileDetails from '../Components/AskQuestion/ProfileDetails';
import AddQuestionInputs from '../Components/AskQuestion/AddQuestionInputs';
import Visibility from '../Components/AskQuestion/Visibility';
import ProceedButton from '../Components/AskQuestion/ProceedButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const {height, width} = Dimensions.get('window');

const AskQuestion = ({navigation}) => {

  const [questionFilled, setQuestionFilled] = useState("");
  const [visibility, setVisibility] = useState("");
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Ask your question</Text>
      </View>
      <ProfileDetails />
      <AddQuestionInputs questionFilled={questionFilled} />
      <Visibility visibility={visibility} />
      <TouchableOpacity
        onPress={() => navigation.navigate('AskQuestionCongratulations')}>
        <ProceedButton navigation={navigation} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AskQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    paddingHorizontal: 28,
    paddingTop: 16,
    backgroundColor: 'white',
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
