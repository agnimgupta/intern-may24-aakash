import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

const BottomSheetButtons = ({name, button, showButton}) => {
  const [color, setColor] = useState(true);
  return (
    <Pressable
      onPress={() => {
        if(color){
            showButton(button-1)
            setColor(false)
        } else {
            showButton(button+1)
            setColor(true)
        }
      }}
      style={[
        {
          borderWidth: 1,
          borderColor: '#B6B6B6',
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 16,
        },
        color
          ? {borderColor: '#B6B6B6', backgroundColor: 'white'}
          : {borderColor: '#D85454', backgroundColor: '#D85454'},
      ]}>
      <Text
        style={[
          {
            fontFamily: 'Nunito-Regular',
            paddingHorizontal: 23,
            paddingVertical: 7,
          },
          color ? {color: '#B6B6B6'} : {color: '#FFFFFF'},
        ]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default BottomSheetButtons;

const styles = StyleSheet.create({});
