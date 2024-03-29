import React, { Component } from 'react';
import { Image ,Dimensions} from 'react-native';
import { Container, View, Text, Content } from 'native-base';
import Button from './common/Button';
import {FontAwesome} from "@expo/vector-icons"
import {Actions} from "react-native-router-flux";
var { height, width } = Dimensions.get('window');

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6" }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 ,width}}>
          <Text style={styles.title}>Easy Manage!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../../assets/icons/easymanage.png')} />
          <Text style={styles.title}>Yo ho ho!</Text>
          <Text style={styles.subtitle}>"View job applications, manage & invite to interviews</Text>

          <View style={{ marginTop: 40 }}>
            <Button onPress={()=>Actions.replace('login')} buttonText="Aye, Lets go" width={200} color="#fff" bgColor="#ff5a4f" />
          </View>
        </Content>
        <View style={styles.sliderIcons}>
           <FontAwesome style={styles.icon} name="circle-o" />
           <FontAwesome style={styles.icon} name="circle-o" />
           <FontAwesome style={styles.icon} name="circle-o" />
           <FontAwesome style={styles.icon} color='#344d5e' name="circle" />
        </View>
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