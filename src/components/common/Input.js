import React, { Component } from 'react';
import { View, Label, Input, Picker, Item } from 'native-base';

export default class InputField extends Component {
  render() {
    const styles = {
      inputStyles: {
        borderWidth: .8,
        borderColor: "#9d9d9c",
        height: 40,
        borderRadius: 5,
        marginTop: 5,
        fontFamily: "calibre",
        paddingLeft: 15,
        backgroundColor: this.props.bgColor || "#fff"
      },
      labelStyles: {
        fontFamily: "calibre",
        marginLeft: 1
      },
      view: {
        marginVertical: 5
      }
    }
    return (
      <View style={styles.view}>
        <Label style={styles.labelStyles}>
          {this.props.Label} {this.props.required ? "*" : ""}
        </Label>
        <Input
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor || "#9d9d9c"}
          style={styles.inputStyles} />
      </View>
    )
  }
}