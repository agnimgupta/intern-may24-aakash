import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import React from 'react';
import Navbar from '../Components/ForumMain/Navbar';
import TopFeedSearchButtons from '../Components/ForumMain/TopFeedSearchButtons';
// import FloatBtnAskQuestion from '../Components/ForumMain/FloatBtnAskQuestion';
import ProfileQuestionAnswer from '../Components/ForumMain/ProfileQuestionAnswer';
import { categories } from '../../categories';
const {height, width} = Dimensions.get('window');

const ForumMainPage = ({navigation}) => {
  return (
    <>
      <Navbar />
      <TopFeedSearchButtons />

    <ScrollView>
      {categories.map((category) => {
        return <View
        key={category.id}
        style={{backgroundColor: '#fff', marginBottom:3}}
        showsVerticalScrollIndicator={false}>
          <ProfileQuestionAnswer index={category.id} navigation={navigation} />
        </View>;
      })}
      </ScrollView>
      {/* <FloatBtnAskQuestion navigation={navigation} /> */}
    </>
  );
};

export default ForumMainPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
});
