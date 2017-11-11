import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Icon, Text } from 'native-base';

export default class FooterNav2 extends Component {
  render() {
    return (
      <Footer style={{ backgroundColor: "#fff", width: "100%" }} >
        <TouchableOpacity activeOpacity={.8} style={styles.btn}>
          <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../../../assets/icons/jssearchgray.png')} />
          <Text uppercase={true} style={styles.textStyles}>SEARCH</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} style={styles.btn}>
          <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../../../assets/icons/emp_myjobsgray.png')} />
          <Text uppercase={true} style={styles.textStyles}>JOBS</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} style={styles.btn}>
          <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../../../assets/icons/jsactivitygray.png')} />
          <Text uppercase={true} style={styles.textStyles}>ACTIVITY</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} style={styles.btn}>
          <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../../../assets/icons/jsalertgray.png')} />
          <Text uppercase={true} style={styles.textStyles}>ALERTS</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} style={styles.btn}>
          <Image resizeMode="contain" style={{ width: 22, height: 22 }} source={require('../../../assets/icons/emp_interviewsgray.png')} />
          <Text uppercase={true} style={styles.textStyles}>INTERVIEWS</Text>
        </TouchableOpacity>
      </Footer>
    );
  }
}
const styles = {
  btn: {
    paddingTop: 10,
    width: "20%",
    flexDirection: "column",
    alignItems: "center",
  },
  textStyles: {
    fontFamily: "calibre",
    fontSize: 9,
    color: "#9d9d9c",
    marginTop: 2.5
  }
}