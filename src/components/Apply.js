import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right, Item } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import Input from './common/Input';
import Input2 from './common/Input2';
import Dropdown2 from './common/Dropdown2';
import Apply2 from "./Apply2";
import Apply3 from "./Apply3";


export default class Apply extends Component {
  state = {
    index: 0
  }

  stepper = () => {
    switch (this.state.index) {
      case 0:
        return (this._renderRow())
        break;
      case 1:
        return (<Apply2 changeState={this.changeState} />)

      case 2:
        return (<Apply3 />)
      default:
        alert('finished')
    }
  }

  changeState = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  _renderRow = () => {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Apply Now"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>
          <Text style={styles.heading}>Get started by entering your email</Text>
          {/* <Input Label="Email" value="test@jobsilce.mv" placeholderTextColor="#000" bgColor="#e5e5ea" disabled /> */}
          <View style={{ backgroundColor: '#e5e5ea', borderRadius: 5, justifyContent: 'center', paddingLeft: 15, paddingRight: 5, borderColor: '#9d9d9c', borderWidth: 0.8, height: 40 }}>
            <Text style={{ color: 'black', fontSize: 17 }}>
              test@jobsilce.mv
      </Text>
          </View>
          <Text style={styles.heading}>Kick off your application with a fewer details.</Text>
          <Input2 Label="Full Name" required={true} />
          <Dropdown2
            Label="Gender"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="Male"
            item3="Female"
          />
          <Input2 Label="Contact Number" required={true} />
          <Dropdown2
            Label="Nationality"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="Maldivian"
            item3="Foreigner"
          />
          <Dropdown2
            Label="Qualification"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="O`Level"
            item3="A`Level`"
            item4="Diploma"
            item5="Advance Diploma"
            item6="Bachelors Degree"
            item7="Masters Degree"
            item8="Doctor Of Philosophy"
            item9="Not Stated"
          />
          <Dropdown2
            Label="Experience"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="O`Level"
            item3="A`Level`"
            item4="Diploma"
            item5="Advance Diploma"
            item6="Bachelors Degree"
            item7="Masters Degree"
            item8="Doctor Of Philosophy"
            item9="Not Stated"
          />
        </Content >
        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 1/3</Text>
          <Right>
            <Text style={styles.barText} onPress={this.changeState}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
  render() {
    return (
      this.stepper()
    )
  }
}

const styles = {
  heading: {
    fontFamily: "calibre",
    marginVertical: 10
  },
  fixBar: {
    backgroundColor: "#243747",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row"
  },
  barText: {
    fontSize: 20,
    width: "50%",
    color: "#fff",
    textAlign: "center",
    fontFamily: "calibre"
  }
}