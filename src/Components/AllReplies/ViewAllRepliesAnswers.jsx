import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import AllRepliesLoveShComm from '../../Helpers/AllReplies/AllRepliesLoveShComm';

const ViewAllRepliesAnswers = () => {
  return (
    <View style={styles.mainContainer}>
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
        <View>
          <FontAwesomeIcon icon={faEllipsisV} />
        </View>
      </View>

      <View style={styles.answerBox}>
        <Text style={styles.answerBoxText}>Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.</Text>
      </View>

      <AllRepliesLoveShComm/>
    </View>
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

})