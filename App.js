import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { AppLoading } from 'expo';
import RouterNative from './src/config/router';
import Store from "./src/store/";
import { Provider } from 'react-redux';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'calibre': require('./assets/font/calibre.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.fontLoaded ? <Provider store={Store}>
           <RouterNative /> 
           </Provider>: null
        }
      </View>
    );
  }
}