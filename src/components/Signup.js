import React, { Component } from 'react';
import { Container, Content, View, Text, Input, Item, Icon, Right, CheckBox } from 'native-base';
import Button from './common/Button';
import {Actions} from "react-native-router-flux";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }
  }
  onPress() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Content>
          <View style={{ marginHorizontal: 15 }}>
            <Icon onPress={()=>Actions.pop()} style={styles.backIcon} name="md-arrow-back" />
            <Text style={styles.title}>Enter your email and set a password</Text>
            <Item>
              <Input keyboardType="email-address" placeholder="E-mail" />
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="Password" />
              <Icon name="ios-eye-outline" />
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="Repeat Password" />
              <Icon name="ios-eye-outline" />
            </Item>

            <View style={styles.row}>
              <CheckBox onPress={this.onPress.bind(this)} checked={this.state.checked} color="#243747" />
              <Text style={styles.smallText}>I agree to the terms & conditions. </Text>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Button buttonText="Let's Go" color="#fff" bgColor="#243747" width="100%" />
            </View>

          </View>
        </Content>
      </Container >
    )
  }
}

const styles = {
  row: {
    marginVertical: 20,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "calibre",
    fontSize: 30,
    marginBottom: 20,
    color: "#243747"
  },
  backIcon: {
    marginVertical: 30,
    fontSize: 30,
  },
  smallText: {
    fontSize: 14,
    fontFamily: "calibre",
    color: "#243747",
    marginLeft: 20
  },
}