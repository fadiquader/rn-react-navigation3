import React from 'react';
import { View, Text, Button } from 'react-native';

class PhotosScreen extends React.Component {
  static navigationOptions = {
    title: 'Photos'
  };

  render() {
    return (
      <View>
        <Text>Photos Screen</Text>
      </View>
    )
  }
}

export default PhotosScreen;
