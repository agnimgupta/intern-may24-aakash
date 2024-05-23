import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import React from 'react';
import Navbar from '../Components/ForumMain/Navbar';
import TopFeedSearchButtons from '../Components/ForumMain/TopFeedSearchButtons';
import FloatBtnAskQuestion from '../Components/ForumMain/FloatBtnAskQuestion';
import TextInputType2 from '../Helpers/AskQuestion/TextInputType2';
import ProfileAndQuestion from '../Components/ForumMain/ProfileAndQuestion';
const {height, width} = Dimensions.get('window');

const ForumMainPage = ({navigation}) => {
  return (
    <>
      <Navbar />
      <TopFeedSearchButtons />

      <ScrollView
        style={{backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}>
        <ProfileAndQuestion />
        <TextInputType2 />
        <TextInputType2 />
        <TextInputType2 />
        <TextInputType2 />
        <TextInputType2 />
        <Text>AkashAjahshahha</Text>
        <FloatBtnAskQuestion navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default ForumMainPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
});
