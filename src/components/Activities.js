import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Tab, Tabs, Right, Container, Content, View, Text, Input, Item, Icon, Picker } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav2 from '../components/FooterNav2';
import StickyBar from '../components/StickyBar';
import Popup from '../components/Modal';

const AppliedJobs = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons: {
      width: 25,
      height: 25,
      marginHorizontal: 5
    },
    text1: {
      color: "#00bbb1",
      fontFamily: "calibre",
      fontSize: 20,
    },
    text2: {
      fontFamily: "calibre",
      fontSize: 15,
    },
    text3: {
      fontFamily: "calibre",
      fontSize: 12,
    }
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Marketing Manager</Text>
            <Text style={styles.text2}>ABC Company Ltd</Text>

            <View style={styles.rowStyles}>
              <Text style={styles.text3}>Applied on: 12th Sep 2017</Text>
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../resources/icons/saved_small.png')} />
              <Text style={styles.text3}>Deadline: 15th June 2017</Text>
            </View>
          </View>

          <Right>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_approve_accept.png')} />
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>ABC Company Ltd</Text>

            <View style={styles.rowStyles}>
              <Text style={styles.text3}>Applied on: 25th Sep 2017</Text>
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../resources/icons/saved_small.png')} />
              <Text style={styles.text3}>Deadline: 15th June 2017</Text>
            </View>
          </View>

          <Right>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_pending.png')} />
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Production Assistant</Text>
            <Text style={styles.text2}>ABC Company Ltd</Text>

            <View style={styles.rowStyles}>
              <Text style={styles.text3}>Applied on: 12th Sep 2017</Text>
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../resources/icons/saved_small.png')} />
              <Text style={styles.text3}>Deadline: 15th June 2017</Text>
            </View>
          </View>

          <Right>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_reject.png')} />
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

const SavedJobs = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons: {
      marginTop: 10,
      width: 22,
      height: 22,
      marginHorizontal: 5
    },
    text1: {
      fontFamily: "calibre",
      fontSize: 18,
      color: "#00bbb1",
    },
    smallText: {
      fontSize: 12,
      fontFamily: "calibre",
    },
    smallImage: {
      width: 15,
      height: 15,
      marginRight: 5
    },
    row2Styles: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 1
    },
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Procurement Officer & Regional Manager</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/jsactivitygreen.png')} />
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>General Technician Level 2</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Toilet Cleaner</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}


export default class Activities extends Component {
  state = {
    modalVisible: true
  }

  render() {
    return (
      <Container>
        <HeaderSmall
          headerText="My Activities"
          rightIcon={true}
          rightIconName="ios-options"
        />
        <Popup modalVisible={this.state.modalVisible} />
        <Content style={{ backgroundColor: "#fff" }}>
          <Tabs

            tabBarUnderlineStyle={{ backgroundColor: "#ffcc29", height: 7 }}
            initialPage={1} >
            <Tab
              activeTabStyle={styles.tabStyle}
              activeTextStyle={{ color: "#fff" }}
              textStyle={{ color: "#fff" }}
              tabStyle={styles.tabStyle}
              heading="Applied Jobs"
            >
              <AppliedJobs />
            </Tab>
            <Tab
              activeTabStyle={styles.tabStyle}
              activeTextStyle={{ color: "#fff" }}
              textStyle={{ color: "#fff" }}
              tabStyle={styles.tabStyle}
              heading="Saved Jobs">
              <SavedJobs />
            </Tab>
          </Tabs>
        </Content >

        <StickyBar
          text1="Pending"
          text2="Accepted"
          text3="Rejected"
          image1={require('../resources/icons/status_pending.png')}
          image2={require('../resources/icons/status_approve_accept.png')}
          image3={require('../resources/icons/status_reject.png')}
        />
        <FooterNav2 />
      </Container >
    )
  }
}

const styles = {
  activeTab: {
    backgroundColor: "#00bbb1"
  },
  tabStyle: {
    backgroundColor: "#00bbb1"
  },
  rowStyles: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#efeff4"
  },
  bottomText: {
    fontFamily: "calibre",
    textAlign: "center",
    marginVertical: 20
  },
  stickyBox: {
    backgroundColor: "#efeff4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  stickyBoxText: {
    fontSize: 14,
    fontFamily: "calibre",
    marginLeft: 5
  },
}