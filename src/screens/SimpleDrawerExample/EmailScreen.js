import React from 'react';
import { View, Text, Button } from 'react-native';

class Email extends React.Component {
  static navigationOptions = {
    title: 'Email',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Email Screen</Text>
        <Button title="Open Drawer" onPress={navigation.openDrawer} />
      </View>
    )
  }
}

export default Email;
