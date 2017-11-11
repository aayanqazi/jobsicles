import React from 'react';
import { StyleSheet, Text, View ,Image, AsyncStorage} from 'react-native';
import { AppLoading } from 'expo';
import {Actions} from "react-native-router-flux";

export default class Splash extends React.Component {

  componentDidMount(){
    setTimeout(async function(){
      let value = await AsyncStorage.getItem('user');
      console.log(value)
      if(value)
      {
        Actions.replace('alljobs')
      }
      else{
        Actions.replace('splashOne')        
      }
    },2000)
  }
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icons/splash_logo.png")} />
      <View style={styles.content}>
      <Image style={styles.flag} source={require("../../assets/icons/flag.png")} />
      <Text style={styles.text}>
        The Leading Career Brand in Maldives
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:174
  },
  text:{
    color:'#000000',
    width:170,
    paddingLeft:10
  },
  flag:{
    width:40,
    height:40
  },
  content:{
    marginTop:150,
    flexDirection:'row',
    alignItems:'center'
  }
});
