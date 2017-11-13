import React, { Component } from 'react';
import { Container, Content, View, Text, Input, Item, Icon, Picker, Right } from 'native-base';
import Button from './common/Button';
import {Actions} from "react-native-router-flux";

export default class GetStarted extends Component {
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

  nextScreen = ()=>{
    if(this.state.selected2 === "key0" || this.state.selected2 === undefined)
    {
      alert('Please select any one option')
    }
    else{
      Actions.push('signup',{role:this.state.selected2})      
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Content>
          <View style={{ marginHorizontal: 25 }}>
            <Icon style={styles.backIcon} onPress={()=>Actions.pop()} name="md-arrow-back" />
            <Text style={[styles.title, { fontSize: 50, marginBottom: 0 }]}>Ahoy !</Text>
            <Text style={styles.title}>Let's get started</Text>

            <Text style={styles.smallText}>Are you a Jobseeker of Employer?</Text>
            <View style={styles.pickerWrap}>
              <Picker
                style={{ color: "#fff" }}
                mode="dropdown"
                placeholder="-choose wisely-"
                note={false}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label=" -Choose Wisely-" value="key0" />
                <Item label="Jobseeker" value="job" />
                <Item label="Employer" value="employee" />
              </Picker>
            </View>
            <View style={styles.row}>
              <Right>
                <Icon onPress={()=>this.nextScreen()} style={styles.backIcon} name="ios-arrow-dropright" />
              </Right>
            </View>
          </View>
        </Content>
      </Container >
    )
  }
}

const styles = {
  pickerWrap: {
    backgroundColor: "#00bbb1",
  },
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
    fontSize: 43,
  },
  smallText: {
    fontFamily: "calibre",
    color: "#243747",
    marginBottom: 10,
    marginTop: 30

  },
}