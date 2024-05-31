import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';

const UploadDocumentInput = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const selectFile = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type : [DocumentPicker.types.allFiles],
        allowMultiSelection : true,
      });
      console.log(doc);
      setSelectedFile(doc);
    }
    catch (e) {
      if(DocumentPicker.isCancel(err)){
        console.log("User cancelled the Upload : " + err);
      }
      else {
        console.log(err);
      }
    }

  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.documentBox}>
        {selectedFile.length > 0 ? (
          <Text style={styles.textAfterUpload}>{selectedFile[0].name}</Text>
        ) : (
          <Text style={styles.textInput}>Upload images or videos or files</Text>
        )}
      </View>
      <Pressable onPress={selectFile}>
        <Image
          style={{ height: 20, width: 20, resizeMode: 'contain' }}
          source={require('../../assets/Images/AttachIcon.png')}
        />
      </Pressable>
      <Text style={styles.headingText}>Upload Documents</Text>
    </View>
  );
};

export default UploadDocumentInput;

const styles = StyleSheet.create({
  mainContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  textInput: {
    color: '#B6B6B6',
    fontSize: 14,
    fontFamily: 'Nunito-Medium',
  },
  textAfterUpload: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Nunito-Medium',
  },
  headingText: {
    position: 'absolute',
    top: -14,
    left: 11,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily: 'Nunito-Medium',
    fontSize: 12,
  },
  documentBox: {
    height: '100%',
    width: '88%',
    justifyContent: 'center',
    paddingLeft: 17,
  },
});
