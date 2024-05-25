import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ViewAllRepliesProfile = ({answerButtonClicked, setanswerButtonClicked}) => {
  
  return (
    
      <View  style={styles.profileBox}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.profileImg}
            source={require('../../assets/Images/Profile.png')}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Mathew Adams</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.days}>5 days ago •</Text>
              <Text style={styles.following}> Following</Text>
            </View>
          </View>
        </View>
        <View>
          <Pressable onPress={() => setanswerButtonClicked(!answerButtonClicked)}><FontAwesomeIcon icon={faEllipsisV} /></Pressable>
        </View>
      </View>
    
  );
};

export default ViewAllRepliesProfile;

const styles = StyleSheet.create({
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginTop: 24,
  },
  profileImg: {
    height: 44,
    width: 44,
  },
  nameContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#1E1E1E',
    marginBottom: 5,
  },
  days: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 10,
  },
  following: {
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
  
});
