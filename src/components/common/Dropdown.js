import React, { Component } from 'react';
import { View, Label, Input, Picker, Item } from 'native-base';

export default class Dropdown extends Component {
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
        borderWidth: .8,
        borderColor: "#9d9d9c",
        // height: 40,
        borderRadius: 5,
        marginTop: 5,
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

        <View style={styles.inputStyles}>
          <Picker
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
        </View>
      </View>
    )
  }
}