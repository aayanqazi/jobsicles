import React, { Component } from 'react';
import { View, Label, Input, Picker, Item } from 'native-base';

export default class Dropdown3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const styles = {
      labelStyles: {
        fontFamily: "calibre",
        marginLeft: 1
      },
    }
    return (
      <Picker
        style={{ color: this.props.color, marginLeft: 10 }}
        mode="dropdown"
        iosHeader={this.props.placeholder}
        placeholder={this.props.placeholder}
        selectedValue={this.state.selected2}
        onValueChange={this.onValueChange2.bind(this)}
      >
        <Item label={this.props.item1} value="key0" />
        <Item label={this.props.item2} value="key1" />
        <Item label={this.props.item2} value="key2" />
      </Picker>
    )
  }
}