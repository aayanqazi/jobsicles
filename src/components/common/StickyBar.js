import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';

export default class StickyBar extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#efeff4" }}>
        <View style={styles.stickyBox}>
          <View style={styles.rowStyles}>
            <Image resizeMode="contain" style={{ height: 23, width: 23 }} source={this.props.image1} />
            <Text style={styles.stickyBoxText}>{this.props.text1}</Text>
          </View>

          <View style={styles.rowStyles}>
            <Image resizeMode="contain" style={{ height: 23, width: 23 }} source={this.props.image2} />
            <Text style={styles.stickyBoxText}>{this.props.text2}</Text>
          </View>

          <View style={styles.rowStyles}>
            <Image resizeMode="contain" style={{ height: 23, width: 23 }} source={this.props.image3} />
            <Text style={styles.stickyBoxText}>{this.props.text3}</Text>
          </View>

          <View style={styles.rowStyles}>
            <Image resizeMode="contain" style={{ height: 23, width: 23 }} source={this.props.image4 || null} />
            <Text style={styles.stickyBoxText}>{this.props.text4 || null}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "#efeff4",
    alignSelf: "center"
  },
  stickyBox: {
    backgroundColor: "#efeff4",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  stickyBoxText: {
    fontSize: 13,
    fontFamily: "calibre",
    marginLeft: 5
  },
}