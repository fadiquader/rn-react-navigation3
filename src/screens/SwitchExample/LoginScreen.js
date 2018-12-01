import React from 'react';
import { View, Text, Button } from 'react-native';

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Login',
    };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Login Screen</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Feed')}
        />
      </View>
    )
  }
}

export default Login;
