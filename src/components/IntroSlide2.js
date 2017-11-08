import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Text, Content } from 'native-base';
import {FontAwesome} from "@expo/vector-icons"
import {Actions} from "react-native-router-flux";

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6" }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
          <Text style={styles.title}> Yes, Employers!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../../assets/icons/intro_employer.png')} />
          <Text style={styles.title}>Avast ye!</Text>
          <Text style={styles.subtitle}>Have you ever dreamt of your pocket alerting on cadidates?</Text>
          <Text style={styles.subtitle}>Post a job, put the phone in your pocket, sit back & relax.</Text>
          <Text style={styles.subtitle}>Easy peasy.</Text>
        </Content>
        <View style={styles.sliderIcons}>
           <FontAwesome onPress={()=>Actions.replace('splashOne')} style={styles.icon} name="circle-o" />
           <FontAwesome style={styles.icon} color='#344d5e' name="circle" />
           <FontAwesome onPress={()=>Actions.replace('splashThree')} style={styles.icon} name="circle-o" />
           <FontAwesome style={styles.icon} name="circle-o" />
        </View>
        <FontAwesome onPress={()=>Actions.replace('splashThree')} style={styles.arrowIcon} name="arrow-right" />

      </Container>
    )
  }
}

const styles = {
  img: {
    width: "100%",
    height: 130
  },
  title: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 24,
    marginVertical: 20
  },
  arrowIcon:{
    position:'absolute',
    right:20,
    fontSize:20,
    bottom:20
  },
  icon:{
    fontSize:16,
    paddingLeft:5
  },
  sliderIcons:{
    position:'absolute',
    bottom:20,
    alignSelf:'center',
    flexDirection:'row'
  },
  subtitle: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 18,
    marginVertical: 10
  },
}