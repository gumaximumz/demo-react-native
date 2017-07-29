import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import AddJobPostingScreen from '../screens/AddJobPostingScreen/AddJobPostingScreen.react';
import AddJobPostingScreen2 from '../screens/AddJobPostingScreen/AddJobPostingScreen2.react';
import AddJobPostingScreen3 from '../screens/AddJobPostingScreen/AddJobPostingScreen3.react';
import AddJobPostingScreen4 from '../screens/AddJobPostingScreen/AddJobPostingScreen4.react';
import AddJobPostingScreen5 from '../screens/AddJobPostingScreen/AddJobPostingScreen5.react';
//import HomeScreen from '../screens/HomeScreen';
console.disableYellowBox = true;

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    AddJobPost: {
      screen: AddJobPostingScreen,
    },
    AddJobPost2: {
      screen: AddJobPostingScreen2,
    },
    AddJobPost3: {
      screen: AddJobPostingScreen3,
    },
    AddJobPost4: {
      screen: AddJobPostingScreen4,
    },
    AddJobPost5: {
      screen: AddJobPostingScreen5,
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
