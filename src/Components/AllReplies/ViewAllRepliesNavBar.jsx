import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ViewAllRepliesNavBar = ({navigation}) => {
  return (
    <View style={{height:188, width:'100%',}}>
      <ImageBackground resizeMode='cover' source={require('../../assets/Images/ViewAllReplies.png')} style={{ flex: 1, width: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><FontAwesomeIcon style={{position:'absolute', top:40, left:40}} icon={faArrowLeft} size={26} /></TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default ViewAllRepliesNavBar

const styles = StyleSheet.create({})