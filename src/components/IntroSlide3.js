import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, View, Text, Content } from 'native-base';
import { FontAwesome } from "@expo/vector-icons"
import { Actions } from "react-native-router-flux";
var { height, width } = Dimensions.get('window');

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6", width }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
          <Text style={styles.title}> Go Paperless!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../../assets/icons/cam_pdf.png')} />
          <Text style={styles.title}>Blimey</Text>
          <Text style={styles.subtitle}>Stop running around your printing copies of your CV or docs</Text>
          <Text style={styles.subtitle}> Snap it, attach & apply, No more PAPERS!</Text>
          <Text style={styles.subtitle}>"Save a tree. Be a hero"</Text>
        </Content>
        <View style={styles.sliderIcons}>
          <FontAwesome style={styles.icon} name="circle-o" />
          <FontAwesome style={styles.icon} name="circle-o" />
          <FontAwesome style={styles.icon} color='#344d5e' name="circle" />
          <FontAwesome style={styles.icon} name="circle-o" />
        </View>
        <FontAwesome onPress={() => this.props.next(width,3)} style={styles.arrowIcon} name="arrow-right" />
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
  arrowIcon: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
    bottom: 20
  },
  icon: {
    fontSize: 16,
    paddingLeft: 5
  },
  sliderIcons: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  subtitle: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 18,
    marginVertical: 10
  },
}