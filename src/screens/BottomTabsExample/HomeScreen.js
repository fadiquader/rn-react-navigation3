import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons name="ios-home" size={30} color={focused ? tintColor : ''} />
    }
  }
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default HomeScreen;
