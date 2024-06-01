import { StyleSheet, View, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import AllRepliesLoveShComm from '../../Helpers/AllReplies/AllRepliesLoveShComm';

const ViewAllRepliesAnswers = ({setVisible}) => {

  const [isClicked, setIsCliked] = useState(false);
  return (
    <Pressable onPress={() => setIsCliked(false)} style={styles.mainContainer}>
      <View style={styles.profileBox}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          
            <Image
              style={styles.profileImg}
              source={require('../../assets/Images/Profile.png')}
            />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Dr. Liam Mathews</Text>
              <Text style={styles.days}>5 days ago</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsCliked(!isClicked)}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </TouchableOpacity>
      </View>

      <View style={styles.answerBox}>
        <Text style={styles.answerBoxText}>Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.</Text>
      </View>
      <AllRepliesLoveShComm/>


      {isClicked ? <View style={styles.floatingBox}>
        <TouchableOpacity style={[styles.miniBox, {borderBottomWidth:1, borderBottomColor:'#EDEDED'}]}>
          <Image style={[styles.boxImage, {height:15, width:11}]} source={require('../../assets/Images/SaveImageLong.png')} />
          <Text style={[styles.boxText, {marginRight:8}]}>Save Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.miniBox, ]}>
          <Image style={[styles.boxImage, {width:20, height:13}]} source={require('../../assets/Images/Flower.png')} />
          <Text style={[styles.boxText,{marginRight:30}]}>Send Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)} style={[styles.miniBox, {borderTopWidth:1, borderTopColor:'#EDEDED'} ]}>
          <Image style={[styles.boxImage, {width:16, height:15}]} source={require('../../assets/Images/Report.png')} />
          <Text style={[styles.boxText,{marginRight:45}]}>Report</Text>
        </TouchableOpacity>
      </View> : <View></View>}
    </Pressable>
  )
}

export default ViewAllRepliesAnswers

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F3FAF1',
        height:240,
        marginTop:10,
        marginBottom:5,
        borderRadius:9,
        marginHorizontal:28,
    },
    profileBox: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:15,
        marginHorizontal:16,
        marginBottom:10,
      },
      profileImg: {
        height: 29,
        width: 29,
      },
      nameContainer:{
        marginLeft:15,
      },
      name:{
        fontSize:12,
        fontFamily: 'Nunito-Regular',
        color:'#3A643B',
        marginBottom:2,
      },
      days:{
        fontFamily: 'Nunito-Regular',
        fontSize:12,
      },
      answerBox: {
        marginHorizontal:18,
      },
      answerBoxText: {
        fontFamily: 'Nunito-Regular',
        fontSize:13,
        color:'#000000',
      },


      floatingBox: {
        height: 105,
        width: 150,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 16,
        right: 18,
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
        resizeMode:'contain'
      },
      boxText:{
        fontFamily:'Nunito-Regular',
        fontSize:12,
        color:'#1E1E1E',
      }
     

})