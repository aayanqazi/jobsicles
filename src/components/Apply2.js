import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right, Input, ListItem, Body } from 'native-base';
import HeaderSmall from './common/HeaderSmall';

export default class Apply2 extends Component {
  state = {
    checked: false
  }

  onPress() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Post a Job"
          leftText=""
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>

          <Text style={styles.title}>Covering Note.</Text>
          <Text style={styles.subtitle}>
            Coverig note should briefly tell the employer what experience and skills you have that set you apart. You can write your own or add the Jobsicle default cover note.
          </Text>
          <View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <Right>
                <Text style={styles.blueText}>Add default cover Note</Text>
              </Right>
            </View>
            <Input multiline={true} maxLength={700} style={styles.inputStyles} />
          </View>
        </Content >

        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 2/3</Text>
          <Right>
            <Text style={styles.barText} onPress={()=>this.props.changeState()}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
  inputStyles: {
    borderWidth: .7,
    borderColor: "#9d9d9c",
    borderRadius: 5,
    height: 150,
    marginTop: 5,
    padding: 5,
    textAlignVertical: "top",
    fontFamily: "calibre"
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "calibre"
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "calibre",
    paddingRight: 15,
    marginTop: 5
  },
  blueText: {
    color: "#00bbb1",
    fontSize: 14,
    fontFamily: "calibre"
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