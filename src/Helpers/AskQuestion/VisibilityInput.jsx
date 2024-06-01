import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const VisibilityInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibilityText, setVisibilityText] = useState('');
  return (
    <>
      <View style={styles.mainContainer}>
        {visibilityText && visibilityText.length > 0 ? (
          <View style={styles.visibilityBoxText}>
            <Text style={{color:'black', fontSize: 14, fontFamily:'Nunito-Medium'}}>{visibilityText}</Text>
          </View>
        ) : (
          <View style={styles.visibilityBoxText}>
            <Text style={{color:'#B6B6B6', fontSize: 11, fontFamily:'Nunito-Medium'}}>Choose your visibility</Text>
          </View>
        )}
        <TouchableOpacity
          style={{height: '100%', width: '18%', justifyContent: 'center'}}
          onPress={() => setIsVisible(!isVisible)}>
          <FontAwesomeIcon icon={isVisible?faAngleDown:faAngleUp} color="#171717" />
        </TouchableOpacity>
        <Text style={styles.headingText}>
          Visibility <Text style={{color: 'red'}}>* </Text>
        </Text>
      </View>

      {isVisible ? (
        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.private}
            onPress={() => (
              setVisibilityText('Private'), setIsVisible(!isVisible)
            )}>
            <View style={styles.publicPrivateContainer}>
              <Text style={styles.visibilityMainText}>Private</Text>
              <Text style={styles.visibilityDescription}>
                Only you and people you choose can see your question
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.public}
            onPress={() => (
              setVisibilityText('Public'), setIsVisible(!isVisible)
            )}>
            <View style={styles.publicPrivateContainer}>
              <Text style={styles.visibilityMainText}>Public</Text>
              <Text style={styles.visibilityDescription}>
                Everyone in the forum can see the question
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default VisibilityInput;

const styles = StyleSheet.create({
  mainContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  visibilityBoxText: {
    height: '100%',
    width: '88%',
    justifyContent: 'center',
    paddingLeft: 14,
    fontFamily:'Nunito-Regular',
    
  },
  headingText: {
    position: 'absolute',
    top: -12,
    left: 11,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily:'Nunito-Medium',
    fontSize: 12,
  },
  secondContainer: {
    marginTop: 10,
  },

  private: {
    width: '100%',
    height: 57,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderTopEndRadius: 17,
    borderTopLeftRadius: 17,
    
  },
  public: {
    width: '100%',
    height: 57,
    borderColor: '#D6D6D6',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomEndRadius: 17,
    borderBottomLeftRadius: 17,
  },
  visibilityMainText: {
    color: '#000',
    fontSize: 14,
    fontFamily:'Nunito-Medium',
  },
  visibilityDescription: {
    fontSize: 10,
    marginTop: 4,
    color: '#B6B6B6',
    fontFamily:'Nunito-Medium',
  },
  publicPrivateContainer: {
    marginHorizontal: 23,
    height: '100%',
    justifyContent: 'center',
  },
});
