import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const AddAnswerCongratulation = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/Images/Congratulations.png')}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '90%',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontSize: 16,
                color: '#000000',
                marginBottom: 40,
              }}>
              Success !
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
                color: '#000000',
                textAlign: 'center',
              }}>
              Your answer has been successfully submitted. Thanks for your sharing your views.
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{marginTop: 5}}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Nunito-SemiBold',
            }}>
            View your question
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{width: '100%', alignItems: 'center', marginTop: 25}}>
          <Text style={styles.feedText}>Go to Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAnswerCongratulation;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    marginHorizontal: 28,
  },
  imageContainer: {
    height: '80%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },

  buttonContainer: {
    height: 58,
    width: '100%',
    backgroundColor: '#3A643B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  feedText: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: '#3A643B',
  },
});
