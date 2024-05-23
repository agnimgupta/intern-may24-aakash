import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

const ProfileDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={require('../../assets/Images/Profile.png')} />
      <Text style={styles.name}>Mathew Adams</Text>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
  mainContainer: {
    marginTop:18,
    marginLeft:3,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height:38,
    width:38,
  },
  name:{
    fontSize:14,
    fontWeight:'400',
    color:'#3A643B',
    marginLeft:15,
    fontFamily:'Nunito-SemiBold'
  }
})