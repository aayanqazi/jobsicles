import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text, Content, Left, Right, Body, Icon } from 'native-base';

export default class HeaderSmall extends Component {
  render() {
    return (
      <View style={styles.headerStyles}>
        <Left>
          {
            this.props.leftIcon ? <Icon name={this.props.leftIconName} /> : null
          }
          {this.props.leftAction ? <Text onPress={this.props.leftAction} style={styles.leftText}>{this.props.leftText}</Text> :
            <Text style={styles.leftText}>{this.props.leftText}</Text>}
        </Left>
        <Body>
          <Text style={styles.headerText}>{this.props.headerText}</Text>
        </Body>
        <Right>
          {
            this.props.rightIcon ? this.props.rightAction? <Icon style={styles.icons} onPress={this.props.rightAction} name={this.props.rightIconName} />:<Icon style={styles.icons} name={this.props.rightIconName} /> : null
          }
          <Text style={styles.rightText}>{this.props.rightText}</Text>
        </Right>
      </View>
    )
  }
}

const styles = {
  headerStyles: {
    backgroundColor: "#00bbb1",
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "calibre",
  },
  rightText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "calibre"
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "calibre",
    fontSize: 18,
    width: 160
  },
  icons: {
    marginTop: 3,
    fontSize: 22,
    color: "#fff"
  }
}