import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import React from 'react';
import Navbar from '../Components/ForumMain/Navbar';
import TopFeedSearchButtons from '../Components/ForumMain/TopFeedSearchButtons';
import ProfileQuestionAnswer from '../Components/ForumMain/ProfileQuestionAnswer';
import { categories } from '../../categories';
import FloatBtnAskQuestion from '../Components/ForumMain/FloatBtnAskQuestion';
const {height, width} = Dimensions.get('window');

const ForumMainPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
     <View>
      <Navbar />
      <TopFeedSearchButtons />
      
      
     </View>

    <ScrollView style={{flex:1, zIndex:-1}}>
      {categories.map((category) => {
        return <View
        key={category.id}
        style={{backgroundColor: '#fff', marginBottom:3}}
        showsVerticalScrollIndicator={false}>
          <ProfileQuestionAnswer index={category.id} navigation={navigation} />
        </View>;
      })}
      </ScrollView>
      <FloatBtnAskQuestion navigation={navigation} />
      
    </View>
  );
};

export default ForumMainPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex:1,
  },

  
});
