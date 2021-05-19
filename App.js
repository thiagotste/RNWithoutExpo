import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const App = () => {
  const pickImage = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        saveToPhotos: true
      },
      (response) => {
        setResponse(response);
      },
    )
  }

  return (
    <View>
      <Button title="Tirar foto" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
