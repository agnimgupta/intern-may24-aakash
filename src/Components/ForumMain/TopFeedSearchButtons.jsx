import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopFeedSearchButtons = () => {
  const [index, setIndex] = useState(1);
  return (
    <>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => setIndex(1)} style={styles.buttonContainers}>
          <Text
            style={[
              styles.btnText,
              index === 1
                ? {color: '#3A643B', fontFamily: 'Nunito-SemiBold'}
                : {color: '#B6B6B6'},
            ]}>
            Top Feed
          </Text>
        </Pressable>
        <Pressable onPress={() => setIndex(2)} style={styles.buttonContainers}>
          {index===2? <FontAwesomeIcon icon={faSearch} color='#3A643B' />: <FontAwesomeIcon icon={faSearch} color='#B6B6B6' />}
          <Text
            style={[
              styles.btnText,
              index === 2
                ? {color: '#3A643B', fontFamily: 'Nunito-SemiBold'}
                : {color: '#B6B6B6'},
            ]}>
            Search
          </Text>
        </Pressable>
      </View>
      <View style={styles.linesContainer}>
        <View
          style={[
            {borderWidth: 1, width: '50%'},
            index === 1 ? {borderColor: '#3A643B'} : {borderColor: '#B6B6B6'},
          ]}></View>
        <View
          style={[
            {borderWidth: 1, width: '50%'},
            index === 2 ? {borderColor: '#3A643B'} : {borderColor: '#B6B6B6'},
          ]}></View>
      </View>
    </>
  );
};

export default TopFeedSearchButtons;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  buttonContainers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  linesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
