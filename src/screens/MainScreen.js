/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Button
          title="Navigate To Stack Example"
          onPress={() => this.props.navigation.navigate('StackExample')}
        />
        <Button
          title="Navigate To Bottom Tabs Example"
          onPress={() => this.props.navigation.navigate('BottomTabsExample')}
        />
        <Button
          title="Navigate To Drawer Example"
          onPress={() => this.props.navigation.navigate('DrawerExample')}
        />
        <Button
          title="Navigate To Switch Example"
          onPress={() => this.props.navigation.navigate('SwitchExample')}
        />
      </View>
    );
  }
}

export default MainScreen;
