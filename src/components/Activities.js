import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Tab, Tabs, Right, Container, Content, View, Text, Input, Item, Icon, Picker } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';
import StickyBar from './common/StickyBar';
import Popup from './common/Modal';
import { connect } from 'react-redux'
import { Actions } from "react-native-router-flux";
import JobActions from "../store/actions/jobs";
import moment from "moment";
import { DangerZone, WebBrowser } from 'expo';
const { Lottie } = DangerZone;
import Loader from "../../assets/animations/loading.json";

const AppliedJobs = ({ ind, data }) => {
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
    <ListItem key={ind}>
      <View style={styles.rowStyles}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.text1}>{data.Appliedjob}}</Text>
          <Text style={styles.text2}>{data.companyTitle}</Text>

          <View style={styles.rowStyles}>
            <Text style={styles.text3}>Applied on: {moment(data.AppliedDate).format("DD/MMM/YYYY")}</Text>
            <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../../assets/icons/saved_small.png')} />
            <Text style={styles.text3}>Deadline: {moment(data.DeadlineDate).format("DD/MMM/YYYY")}</Text>
          </View>
        </View>

        <Right>
          {rightIcon(data.Status)}
        </Right>

        {/* <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>ABC Company Ltd</Text>

            <View style={styles.rowStyles}>
              <Text style={styles.text3}>Applied on: 25th Sep 2017</Text>
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../../assets/icons/saved_small.png')} />
              <Text style={styles.text3}>Deadline: 15th June 2017</Text>
            </View>
          </View>

          <Right>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../../assets/icons/status_pending.png')} />
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
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginHorizontal: 5, }} source={require('../../assets/icons/saved_small.png')} />
              <Text style={styles.text3}>Deadline: 15th June 2017</Text>
            </View>
          </View>

          <Right>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../../assets/icons/status_reject.png')} />
          </Right>

        </View>
      </ListItem> */}

      </View>
    </ListItem>

  )
}
const rightIcon = (val) => {
  if (val === "Pending") {
    return (
      <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../../assets/icons/status_pending.png')} />
    )
  }
  else if (val === "Rejected") {
    return (
      <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../../assets/icons/status_reject.png')} />
    )
  }
  else {
    return (
      <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../../assets/icons/status_approve_accept.png')} />
    )
  }
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
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/jsactivitygreen.png')} />
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>General Technician Level 2</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Toilet Cleaner</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}


class Activities extends Component {
  state = {
    modalVisible: false,
    loading: true,
    animation: null,
  }
  componentWillMount() {
    this._playAnimation();
    this.props.getJob("5124")
  }
  _loadAnimationAsync = async () => {
    this.setState(
      { animation: Loader },
      this._playAnimation
    );
  };

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  loaderStart = () => {
    this.animation.reset();
    this.animation.play();
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            style={this.props.job.isLoading ? {
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 20,
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center'
            } : { display: 'none' }}
            source={this.state.animation}
          />}

        <HeaderSmall
          headerText="My Activities"
          rightIcon={true}
          rightIconName="ios-options"
        />
        <Popup modalVisible={this.state.modalVisible} />
        <Content style={{ backgroundColor: "#fff" }}>
          <Tabs
            tabBarUnderlineStyle={{ backgroundColor: "#ffcc29", height: 7 }}
            initialPage={0} >
            <Tab
              activeTabStyle={styles.tabStyle}
              activeTextStyle={{ color: "#fff" }}
              textStyle={{ color: "#fff" }}
              tabStyle={styles.tabStyle}
              heading="Applied Jobs"
            >
              <Content>
                {this.props.job.myJobs ? this.props.job.myJobs.map((val, index) => {
                  return (
                    <AppliedJobs ind={index} key={index} data={val} />
                  )
                }) : null}
              </Content>
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
          image1={require('../../assets/icons/status_pending.png')}
          image2={require('../../assets/icons/status_approve_accept.png')}
          image3={require('../../assets/icons/status_reject.png')}
        />
        <FooterNav2 jobsRoute={()=>Actions.push('alljobs')}/>
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

const mapStateToProps = (state) => {
  return {
    job: state.JobReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJob: (count) => dispatch(JobActions.appliedJobsList(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);