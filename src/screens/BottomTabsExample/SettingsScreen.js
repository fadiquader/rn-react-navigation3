import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons name="ios-settings" size={30} color={focused ? tintColor : ''} />
    }
  };
  render() {
    return (
      <View>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

export default SettingsScreen;
