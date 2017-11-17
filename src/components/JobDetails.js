import React, { Component } from 'react';
import { TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import { ListItem, Right, Body, Container, Content, View, Text, Icon } from 'native-base';
import HeaderSmall from '../components/common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';
import { connect } from 'react-redux'
import JobActions from "../store/actions/jobs";


const JobDetailsItems = ({ data }) => {

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
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>
          </View>

          <View style={{ width: "50%", paddingLeft: 10, }}>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
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
                <Image resizeMode="contain" style={{ height: 25, width: 25 }} source={require('../../assets/icons/job_expiring.png')} />
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
      <View style={styles.stickyBar}>
        <View style={styles.stickyBarLeft}>
          <Text style={[styles.stickyBarText, { color: "#000" }]}>APPLY NOW</Text>
        </View>
        <View style={styles.stickyBarRight}>
          <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.stickyBarText}>Save</Text>
            <Image resizeMode="contain" style={{ width: 10, height: 10, marginHorizontal: 5 }} source={require('../../assets/icons/notsaved_small.png')} />
          </View>
        </View>
      </View>
    </Container >
  )
}

const styles = {
  stickyBar: {
    flexDirection: "row",
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
    data: [],
    page: 0,
    loading: false
  }

  componentWillReceiveProps(newProps) {
    if (newProps.job.isProcessing) {
      this.setState({
        loading: true
      })
    }
    if (newProps.job.isDone) {
      this.setState({
        data: this.state.page === 0 ? newProps.job.JobDetails : this.state.data.concat(newProps.job.JobDetails)
      })
      console.log("data", this.state.data)
    }
    else {
      this.setState({
        loading: false
      })
    }
  }

  componentWillMount() {
    this.makeRemoteRequest(this.props.jobDetails.post);
  }

  makeRemoteRequest = (value) => {
    this.props.jobDetails(value)
    // console.log("this.props.jobDetails", this.props.jobDetails())
  }

  requestMore = () => {
    this.setState({
      page: this.state.page + 1
    }, this.makeRemoteRequest())
  }

  // renderFooter = () => {
  //   if (this.state.loading) return null;
  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE"
  //       }}
  //     >
  //       <ActivityIndicator animating size="small" />
  //     </View>
  //   );
  // };
  render() {
    console.log('state', this.props)
    return (
      <Container>
        <Content style={{ backgroundColor: "#fff" }}>
          <JobDetailsItems />
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
    jobDetails: () => dispatch(JobActions.JobDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);