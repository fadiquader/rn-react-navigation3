import React from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome Screen</Text>
        <Button
          onPress={() => navigation.navigate('Profile',  { name: 'Jane' })}
          title="Navigate to Profile"
        />
      </View>
    )
  }
}

export default WelcomeScreen;
