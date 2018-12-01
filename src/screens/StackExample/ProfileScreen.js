import React from 'react';
import { View, Text, Button } from 'react-native';

class ProfilesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { params } = state;
    return  {
      title: `Profile ${params.name}`,
      headerRight: (
        <View>
          <Button
            title={params.mode === 'edit' ? 'Done' : 'Edit'}
            onPress={() =>
              setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
            }
          />
        </View>
      )
    };
  }
  render() {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    const { params } = state;
    return (
      <View>
        <Text>
          {params.mode === 'edit' ? 'Edit' : ''} {params.name} Profile
        </Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Push to Profile Again"
          onPress={() => navigation.push('Profile', { name: 'Fadi' })}
        />
        <Button
          title="Navigate to Profile Again"
          onPress={() => navigation.navigate('Profile', { name: 'Fadi' })}
        />
        <Button
          title="popToTop"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="pop"
          onPress={() => navigation.pop()}
        />
      </View>
    )
  }
}

export default ProfilesScreen;
