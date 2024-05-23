import { StyleSheet, View, Text, Pressable, Image, Alert, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const UploadDocumentInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to select and upload files.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const pickDocument = async () => {

    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to select files.');
      return;
    }

    try {
      const results = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("Picked files: " + JSON.stringify(results));
      const result = results[0];
      
      // Debug: log the result
      console.log('Selected file:', result);
      // Check if the selected file is within the 5 MB limit
      const fileSize = await RNFS.stat(result.uri);
      const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
      if (fileSize.size > maxSize) {
        Alert.alert(
          'File Size Limit Exceeded',
          'Please select a file up to 5 MB.',
        );
      } else {
        const destPath = `${RNFS.DocumentDirectoryPath}/${result.name}`;
        await RNFS.copyFile(result.uri, destPath);
        setSelectedFile({ ...result, uri: destPath });
        uploadFile();
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
        console.log('Document picker cancelled');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };
  const uploadFile = () => {
    // Implement your file upload logic here
    if (selectedFile) {
      // You can use the selectedFile.uri to get the file path for upload
      Alert.alert(
        'File Uploaded',
        `File ${selectedFile.name} has been uploaded successfully.`,
      );
    } else {
      Alert.alert('No File Selected', 'Please select a file to upload.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.documentBox}>
        {selectedFile!=null ? <Text style={styles.textAfterUpload}>{selectedFile.name}</Text>:<Text style={styles.textInput}>
          Upload images or videos or files
        </Text>}
      </View>
      <Pressable onPress={pickDocument}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={require('../../assets/Images/AttachIcon.png')}
        />
      </Pressable>
      <Text style={styles.headingText}>Upload Documents</Text>

      {/* <Pressable onPress={uploadFile} style={{backgroundColor:'green', height:50, width:50}}><Text>Upload</Text></Pressable> */}
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
    fontFamily:'Nunito-Medium',
  },
  textAfterUpload:{
    color: '#000',
    fontSize: 14,
    fontFamily:'Nunito-Medium',
  },
  
  wordCount: {
    color: '#B6B6B6',
    fontSize: 8,
    flex: 1,
  },
  headingText: {
    position: 'absolute',
    top: -14,
    left: 11,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#000',
    fontFamily:'Nunito-Medium',
    fontSize: 12,
  },
  documentBox: {
    height: '100%',
    width: '88%',
    justifyContent: 'center',
    paddingLeft: 17,
  },
});
