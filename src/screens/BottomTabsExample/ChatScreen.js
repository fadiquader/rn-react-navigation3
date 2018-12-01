import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons name="ios-text" size={30} color={focused ? tintColor : ''} />
    }
  };

  render() {
    return (
      <View>
        <Text>Chat Screen</Text>
      </View>
    )
  }
}

export default ChatScreen;
