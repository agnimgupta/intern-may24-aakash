import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get("window")

const Navbar = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground resizeMethod='cover' style={styles.mainImage} source={require('../../assets/Images/NavBarForumImage.png')}>
      </ImageBackground>

    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:'center',
        width:width,
        backgroundColor:'white',
        height:190,
    },
    mainImage:{
        
        flex:1,
        width:'100%'

    },

    
    
})