import React, { Component } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native'
import { View, Text, Icon, } from 'native-base';

export default class Header extends Component {

  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={.8}>
            <Icon style={styles.menuIcon} name="ios-menu" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{this.props.headerText}</Text>
          <Text style={[styles.headerText, { fontSize: 28 }]}>{this.props.headerText2}</Text>
        </View>
      </View >
    )
  }
}

const styles = {
  header: {
    backgroundColor: "#00bbb1",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    // textAlign: "center"
  },
  menuIcon: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 10
  }
}