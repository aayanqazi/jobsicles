import React, { Component } from 'react';
import {
  Image,
  ViewPagerAndroid,
  ScrollView,
  Dimensions
} from 'react-native';
import { Container, Text, View, Content } from 'native-base';
import { FontAwesome } from "@expo/vector-icons"
import { Actions } from "react-native-router-flux";
var { height, width } = Dimensions.get('window');
import Intro2 from "./IntroSlide2"
import Intro3 from "./IntroSlide3"
import Intro4 from "./IntroSlide4"

export default class IntroSlide1 extends Component {
  constructor() {
    super()
    this.scrollView;
  }

  nextPage = (widths, index) => {
    if (index === 3) {
      this.scrollView.scrollTo({ x: widths + width + width, y: 0, animated: true })
    }
    else {
      this.scrollView.scrollTo({ x: widths + width, y: 0, animated: true })
    }
  }

  render() {
    return (
      <ScrollView
        ref={ref => this.scrollView = ref}
        horizontal={true}
        pagingEnabled={true}
        style={{ flex: 1, backgroundColor: '#f4f5f6' }}
        removeClippedSubviews={true}
        showsHorizontalScrollIndicator={false}
      >
        <Container style={{ backgroundColor: "#f4f5f6", alignItems: "center", alignContent: "center", flex: 1, width: width }}>
          <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
            <Text style={styles.title}> Say Jobseekers!</Text>
            <Image style={styles.img} resizeMode="contain" source={require('../../assets/icons/intro_jobseeker.png')} />
            <Text style={styles.title}> Shiver me timbers!</Text>
            <Text style={styles.subtitle}> Do you believe in getting a job with your fingers ?</Text>
            <Text style={styles.subtitle}> Just swipe, tap, tap!</Text>
            <Text style={styles.subtitle}> Apply for jobs on the go.!</Text>
            <Text style={styles.subtitle}> Anywhere, anytime</Text>
          </Content>
          <View style={styles.sliderIcons}>
            <FontAwesome style={styles.icon} color='#344d5e' name="circle" />
            <FontAwesome style={styles.icon} name="circle-o" />
            <FontAwesome style={styles.icon} name="circle-o" />
            <FontAwesome style={styles.icon} name="circle-o" />
          </View>
          <FontAwesome onPress={() => this.nextPage(0)} style={styles.arrowIcon} name="arrow-right" />
        </Container>
        <Intro2 next={this.nextPage} />
        <Intro3 next={this.nextPage} />
        <Intro4 next={this.nextPage} />
      </ScrollView>
    )
  }
}

const styles = {
  img: {
    width: "100%",
    height: 130
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
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
  title: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 24,
    marginVertical: 20
  },
  subtitle: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 18,
    marginVertical: 10
  },
}