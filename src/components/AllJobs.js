import React, { Component } from 'react';
import { TouchableOpacity, Image, FlatList, ActivityIndicator, AsyncStorage } from 'react-native'
import { ListItem, Right, Container, Content, View, Text, List, Left } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';
import { connect } from 'react-redux'
import JobActions from "../store/actions/jobs";
import Loader from "./common/loader";
import { Actions } from 'react-native-router-flux';

const AllJobsItems = ({ data }) => {
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
    // <Content>
    <ListItem onPress={() => Actions.push('jobDetails', { job: data.item })}>
      <Left>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>
              {data.item.jobTitle}
            </Text>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
              <Text style={styles.smallText} onPress={() => Actions.jobDetails()}>{data.item.companyTitle}</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
              <Text style={styles.smallText}>{data.item.salaryRange.toUpperCase()}</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
              <Text style={styles.smallText}>{data.item.location[0]}</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
              <Text style={styles.smallText}>{data.item.jobType[0]}</Text>
            </View>
          </View>

          {/* <View style={{ marginLeft: 15 }}>
          <Text style={styles.text1}>{data.item.jobTitle}</Text>
          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
            <Text style={styles.smallText} onPress={() => Actions.jobDetails()}>{data.item.companyTitle}</Text>
          </View>

          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_salary.png')} />
            <Text style={styles.smallText}>{data.item.salaryRange.toUpperCase()}</Text>
          </View>

          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_location.png')} />
            <Text style={styles.smallText}>{data.item.location[0]}</Text>
          </View>
          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_type.png')} />
            <Text style={styles.smallText}>{data.item.jobType[0]}</Text>
          </View>

        </View>
        <Right>
          <View style={styles.rowStyles}>
            {data.item.attachFile === "" ? <View></View> : <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/jsactivitygreen.png')} />
            }
            <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/saved_small.png')} />
          </View>
        </Right> */}
        </View>
      </Left>
      <Right>
        <View style={styles.rowStyles}>
          {data.item.attachFile === "" ? <View></View> : <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/jsactivitygreen.png')} />
          }
          <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/saved_small.png')} />
        </View>
      </Right>
    </ListItem>
  )
}


class MyJobs extends Component {
  state = {
    data: [],
    page: 1,
    loading: false
  }

  componentWillReceiveProps(newProps) {
    if (newProps.job.isProcessing) {
      this.setState({
        loading: true
      })
    }
    if (newProps.job.isDone) {
      console.log('lalalalalala')
      this.setState({
        data: this.state.page === 0 ? newProps.job.alljobs : this.state.data.concat(newProps.job.alljobs),
        page: this.state.page + 1
      })
    }
    else {
      this.setState({
        loading: false
      })
    }
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.props.getJob(this.state.page)
  }

  requestMore = () => {
    // console.log('ON Last')
    setTimeout(
      () => {
        this.makeRemoteRequest()
      }, 1500
    )

  }

  // async componentWillMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     if (this.props.auth.authUser) {
  //       await AsyncStorage.getItem('user', JSON.parse({
  //         // isLoggedIn: true,
  //         cookie: newProps.auth.authUser.cookie,
  //         id: newProps.auth.authUser.user.id,
  //       }));
  //       console.log("(user logged in)");
  //     }
  //     // Actions.replace('alljobs');
  //   }
  //   else if (newProps.auth.isError) {
  //     alert('Something Went Wrong !');
  //   }
  // }

  renderFooter = () => {
    if (this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    );
  };
  render() {
    console.log(this.state)
    return (
      <Container>
        <HeaderSmall
          headerText="All Jobs"
          rightIcon={true}
          rightIconName="ios-options"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          {this.state.data.length === 0 ? null :
            <FlatList
              data={this.state.data}
              renderItem={(items) => (
                <AllJobsItems data={items} />
              )}
              removeClippedSubviews={false}
              keyExtractor={(item, index) => index}
              refreshing={this.props.job.isProcessing}
              ListFooterComponent={this.renderFooter}
              onEndReached={this.requestMore}
              onEndReachedThreshold={0.1}
            />
          }
        </Content >
        <FooterNav2 activityRoute={()=>Actions.push('activites')}/>
      </Container >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer,
    job: state.JobReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJob: (count) => dispatch(JobActions.alljobs(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);

