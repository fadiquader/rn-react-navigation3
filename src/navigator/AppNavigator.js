import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import IonIcons from 'react-native-vector-icons/Ionicons';

//
import MainScreen from '../screens/MainScreen';
import PhotosScreen from '../screens/StackExample/PhotosScreen';
import ProfileScreen from '../screens/StackExample/ProfileScreen';
import WelcomeScreen from '../screens/StackExample/WelcomeScreen';
//
import HomeScreen from '../screens/BottomTabsExample/HomeScreen';
import ChatScreen from '../screens/BottomTabsExample/ChatScreen';
import SettingsScreen from '../screens/BottomTabsExample/SettingsScreen';
import Inbox from '../screens/SimpleDrawerExample/InboxScreen';
import Draft from '../screens/SimpleDrawerExample/DraftScreen';
import Email from '../screens/SimpleDrawerExample/EmailScreen';
import FeedScreen from '../screens/SwitchExample/FeedScreen';
import LoginScreen from '../screens/SwitchExample/LoginScreen';

const headerStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const SwitchExample = createSwitchNavigator({
  Login: LoginScreen,
  Feed: FeedScreen,
});

export const DrawerButton = ({ open }) => {
  return (
    <IonIcons
      name="ios-menu"
      onPress={open}
      size={30}
      style={{ paddingHorizontal: 8 }}
    />
  )
};

const InboxStack = createStackNavigator({
  Inbox: {
    screen: Inbox,
    navigationOptions: ({ navigation }) => {
      return  {
        headerLeft: <DrawerButton open={navigation.openDrawer} />
      }
    },
  },
  Email: {
    screen: Email
  }
});

const DraftStack = createStackNavigator({
  Draft: {
    screen: Draft,
    navigationOptions: ({ navigation }) => {
      return  {
        headerLeft: <DrawerButton open={navigation.openDrawer} />
      }
    },
  },
});

const DrawerExample = createDrawerNavigator({
  Inbox: {
    path: '/',
    screen: InboxStack,
  },
  Draft: {
    path: '/sent',
    screen: DraftStack,
  },
},);

const BottomTabsExample = createBottomTabNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  Settings: SettingsScreen,
}, {
  tabBarOptions: {
    activeTintColor: 'red'
  },
});
const StackExample = createStackNavigator({
  Welcome: WelcomeScreen,
  Photos: PhotosScreen,
  Profile: ProfileScreen,
}, {
  mode: 'modal',
  ...headerStyle,
});

const AppNavigator = createStackNavigator({
  Main: MainScreen,
  StackExample,
  BottomTabsExample,
  DrawerExample,
  SwitchExample
}, {
  // initialRouteName: 'Photos',
  headerMode: 'none',
  ...headerStyle
});

export default AppNavigator;
