import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Right, Body, Container, Content, View, Text, Icon } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

export default class JobDetails extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Job Details"
          rightText="EDIT"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <Text style={styles.title}>Admin & Finance Officer</Text>

          <View style={styles.rowStyles}>

            <View style={{ width: "50%", paddingLeft: 10, }}>
              <View style={styles.row2Styles}>
                <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
                <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
              </View>
              <View style={styles.row2Styles}>
                <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
                <Text style={styles.smallText}>MVR 4000 - 5000</Text>
              </View>
            </View>

            <View style={{ width: "50%", paddingLeft: 10, }}>
              <View style={styles.row2Styles}>
                <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
                <Text style={styles.smallText}>Hulhumale</Text>
              </View>
              <View style={styles.row2Styles}>
                <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
                <Text style={styles.smallText}>Full Time</Text>
              </View>
            </View>

          </View>

          <ListItem>
            <Body>
              <View>
                <Text style={styles.smallText}>Ref: 5D-JB2017</Text>
                <Text style={styles.smallText}>No. of vacancies: 03</Text>
                <Text style={styles.smallText}>Qualifications: GCE Olevel</Text>
              </View>
            </Body>
            <Right>
              <View style={styles.row2Styles}>
                <View style={{ alignItems: "center" }}>
                  <Image resizeMode="contain" style={{ height: 25, width: 25 }} source={require('../resources/icons/job_expiring.png')} />
                  <Text style={{ fontSize: 10, marginTop: 5 }}>07 AUG 2017</Text>
                </View>
                <Icon name="md-more" style={{ fontSize: 30, marginLeft: 30, marginTop: -20 }} />
              </View>
            </Right>
          </ListItem>

          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Text style={styles.smallText}>
              Lorem ipsum sit amet asd comet allez vous Lorem ipsum sit amet asd comet allez vous Lorem ipsum sit amet asd comet allez vous Lorem ipsum sit amet asd comet allez vous Lorem ipsum sit amet asd comet allez vous Lorem ipsum sit amet asd comet allez vous
            </Text>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.smallText}>Lorem ipsum sit amet asd comet allez vous</Text>
              <Text style={styles.smallText}>Lorem Lorem ipsum sit amet asd comet allez vous </Text>
            </View>
          </View>
          <View style={styles.pdfBox}>
            <Text style={{ color: "#fff", marginTop: 50 }}>PDF VIEWER</Text>
          </View>
        </Content >
      </Container >
    )
  }
}

const styles = {
  pdfBox: {
    height: 150,
    backgroundColor: "#333",
    marginHorizontal: 15,
    alignContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  smallText: {
    fontSize: 13,
    fontFamily: "calibre",
  },
  smallImage: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "calibre",
    marginVertical: 10
  },
  row2Styles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  rowStyles: {
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#e5e5ea"
  },
}