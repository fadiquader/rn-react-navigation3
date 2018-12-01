
import React from 'react';
import { View, Text, Button } from 'react-native';

class DraftScreen extends React.Component {
  static navigationOptions = {
    title: 'Draft',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Draft Screen</Text>

      </View>
    )
  }
}

export default DraftScreen;
