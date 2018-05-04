import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyApp from './src/components/MyApp';
import Resume from './src/components/Resume';
import Profile from './src/components/Profile';

const NavigatorApp = StackNavigator({
  Home: { screen: MyApp },
  Resume: { screen: Resume },
  Profile: { screen: Profile },
})

export default class App extends React.Component {
  render() {
    const {container} = styles;
    return (
      <NavigatorApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
