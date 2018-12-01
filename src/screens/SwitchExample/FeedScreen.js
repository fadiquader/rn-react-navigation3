import React from 'react';
import { View, Text, Button } from 'react-native';

class FeedScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Feed Screen</Text>
        <Button title="Sign out" onPress={() => navigation.navigate('Login')} />
      </View>
    )
  }
}

export default FeedScreen;
