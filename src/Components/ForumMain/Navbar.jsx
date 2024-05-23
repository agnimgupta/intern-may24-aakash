import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get("window")

const Navbar = () => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={require('../../assets/Images/NavBarForumImage.png')}/>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:'center',
        width:width,
        backgroundColor:'white',
    },
    mainImage:{
        height:195,
        resizeMode:'contain'
    },
    
})