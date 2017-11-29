import React, { Component } from 'react';
import { TouchableOpacity, Image, FlatList, ActivityIndicator, WebView } from 'react-native'
import { ListItem, Right, Body, Container, Content, View, Text, Icon } from 'native-base';
import HeaderSmall from '../components/common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';
import { connect } from 'react-redux'
import JobActions from "../store/actions/jobs";
import Loader from "../../assets/animations/loading.json";
import { DangerZone, WebBrowser } from 'expo';
const { Lottie } = DangerZone;
import { Actions } from "react-native-router-flux";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons"

const JobDetailsItems = ({ data, save }) => {
  var url;
  data.attachFile ? url = data.attachFile.replace(/[\"\]']+/g, '').replace(/[\[\]']+/g, '') : null;
  console.log(moment.unix(data.JobexpiresDate).format("DD/MMM/YYYY"))
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <HeaderSmall
        headerText="Job Details"
        rightText="EDIT"
      />
      <Content style={{ backgroundColor: "#fff" }}>
        <Text style={styles.title}>{data.jobTitle}</Text>

        <View style={styles.rowStyles}>

          <View style={{ width: "50%", paddingLeft: 10, }}>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText}>{data.companyTitle}</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>{data.salaryRange ? data.salaryRange.toUpperCase() : '-'}</Text>
            </View>
          </View>

          <View style={{ width: "50%", paddingLeft: 10, }}>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>{data.location ? upperCase(data.location[0]) : "-"}</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
              <Text style={styles.smallText}>{data.jobType ? upperCase(data.jobType[0]) : "-"}</Text>
            </View>
          </View>

        </View>

        <ListItem>
          <Body>
            <View>
              <Text style={styles.smallText}>Ref: {data.jobReferenceNo ? data.jobReferenceNo : '-'}</Text>
              <Text style={styles.smallText}>No. of vacancies: {data.job_No_vacancies ? data.job_No_vacancies : "-"}</Text>
              <Text style={styles.smallText}>Qualifications: {data.jobQualification ? upperCase(data.jobQualification[0]) : "-"}</Text>
            </View>
          </Body>
          <Right>
            <View style={styles.row2Styles}>
              <View style={{ alignItems: "center" }}>
                <Image resizeMode="contain" style={{ height: 25, width: 25 }} source={require('../../assets/icons/job_expiring.png')} />
                <Text style={{ fontSize: 10, marginTop: 5 }}>{moment.unix(data.JobexpiresDate).format("DD/MMM/YYYY")}</Text>
              </View>
              <Icon onPress={() => Actions.push('employee', { jobId: data.employerID })} name="md-more" style={{ fontSize: 30, marginLeft: 30, marginTop: -20 }} />
            </View>
          </Right>
        </ListItem>

        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
          <Text style={styles.smallText}>
            {data.jobDescription}
          </Text>
          {/* <View style={{ marginTop: 15 }}>
            <Text style={styles.smallText}>Lorem ipsum sit amet asd comet allez vous</Text>
            <Text style={styles.smallText}>Lorem Lorem ipsum sit amet asd comet allez vous </Text>
          </View> */}
        </View>
        {/* <View style={styles.pdfBox}>
          <Text style={{ color: "#fff", marginTop: 50 }}>PDF VIEWER</Text>
        </View> */}
        {data.attachFile ? <WebView
          source={{ uri: `https://docs.google.com/gview?embedded=true&url=https://jobsicle.mv/wp-content/uploads/jobmonster/${url}` }}
          style={{ marginTop: 20, height: 500 }}
          automaticallyAdjustContentInsets={true}
        /> : <View></View>
        }
      </Content>

      <View style={styles.stickyBar}>
        <View style={styles.stickyBarLeft}>
          <Text style={[styles.stickyBarText, { color: "#000" }]}>APPLY NOW</Text>
        </View>
        <View style={styles.stickyBarRight}>
          <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.stickyBarText} onPress={() => save()}>Save</Text>
            <Image resizeMode="contain" style={{ width: 10, height: 10, marginHorizontal: 5 }} source={require('../../assets/icons/notsaved_small.png')} />
          </View>
        </View>
      </View>
    </Container >
  )
}

const upperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = {
  stickyBar: {
    flexDirection: "row",
    position: 'absolute',
    bottom: 0
  },
  icon: {
    fontSize: 16,
    paddingLeft: 5
  },

  stickyBarLeft: {
    width: "65%",
    paddingVertical: 15,
    alignSelf: "center",
    backgroundColor: "#ffcc29"
  },
  stickyBarRight: {
    width: "35%",
    paddingVertical: 15,
    alignSelf: "center",
    backgroundColor: "#243747",
    // paddingHorizontal: 20
  },
  stickyBarText: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "center",
  },
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

class JobDetails extends Component {
  state = {
    data: {},
    loading: true,
    animation: null,
  }

  _loadAnimationAsync = async () => {

    this.setState(
      { animation: Loader },
      this._playAnimation
    );
  };

  componentWillReceiveProps(newProps) {
    if (newProps.job.isLoading) {
      this.setState({
        loading: true
      })
    }
    if (newProps.job.isDone) {
      this.setState({
        data: newProps.job.jobDetails
      })
    }
    else {
      this.setState({
        loading: false
      })
    }
  }

  componentWillMount() {
    this._playAnimation();
    this.makeRemoteRequest(this.props.navigation.state.params.job.jobID);
  }

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

  makeRemoteRequest = (value) => {
    this.props.jobDetails(value)
  }

  savedJob = () => {
    console.log(`https://jobsicle.mv/api.php?action=bookmark_jobs&tokenID=123&jobID=${this.props.navigation.state.params.job.jobID}&userID=${this.props.user.id}`)
    fetch(`https://jobsicle.mv/api.php?action=bookmark_jobs&tokenID=123&jobID=${this.props.navigation.state.params.job.jobID}&userID=${this.props.user.id}`)
      .then(arr => {
        console.log(arr)
      })
      .catch(err => console.log(err))
  }
  
  render() {
    console.log('statet', this.props)
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            style={this.state.loading || this.props.job.isLoading ? {
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
        <Content style={{ backgroundColor: "#fff" }}>
          <JobDetailsItems data={this.state.data} save={this.savedJob} />
        </Content >
      </Container >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    job: state.JobReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    jobDetails: (value) => dispatch(JobActions.JobDetails(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);