import React, { Component } from 'react';
import { View, Label, Input, Picker, Item } from 'native-base';

export default class Dropdown2 extends Component {
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
      inputStyles: {
        borderBottomWidth: .8,
        borderColor: "#9d9d9c",
        height: 37
        // marginTop: 5,
      },
      labelStyles: {
        fontFamily: "calibre",
        marginLeft: 1,
        marginTop: 10
      },
      view: {
        marginVertical: 10
      },
      color: {
        color: this.props.color || "#000"
      }
    }
    return (
      <View style={styles.view}>
        <Label style={styles.labelStyles}>
          {this.props.Label} {this.props.required ? "*" : ""}
        </Label>

        <View style={styles.inputStyles}>
          <Picker
            style={styles.color}
            mode="dropdown"
            iosHeader={this.props.placeholder}
            placeholder={this.props.placeholder}
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}
          >
            <Item label={this.props.item1} value="key0" />
            <Item label={this.props.item2} value="key1" />
            <Item label={this.props.item3} value="key2" />
            <Item label={this.props.item4} value="key3" />
            <Item label={this.props.item5} value="key4" />
            <Item label={this.props.item6} value="key5" />
            <Item label={this.props.item7} value="key6" />
            <Item label={this.props.item8} value="key7" />
            <Item label={this.props.item9} value="key8" />

          </Picker>
        </View>
      </View>
    )
  }
}