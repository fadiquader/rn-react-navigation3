import React from 'react';
import { View, Text, Button } from 'react-native';
//
class InboxScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Inbox',
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Inbox Screen</Text>
        <Button
          title="Email"
          onPress={() => navigation.navigate('Email')}
        />
      </View>
    )
  }
}

export default InboxScreen;
