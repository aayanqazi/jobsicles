import React, { Component } from 'react';
import { TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import { ListItem, Right, Container, Content, View, Text } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';
import { connect } from 'react-redux'
import JobActions from "../store/actions/jobs";
import Loader from "./common/loader";

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
    <ListItem>
      <View style={styles.rowStyles}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.text1}>{data.item.title}</Text>

          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/job_employer.png')} />
            <Text style={styles.smallText}>{data.item.author.name}</Text>
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
            <Text style={styles.smallText}>{data.item.taxonomy_job_type[0].slug}</Text>
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

  )
}


class MyJobs extends Component {
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
        data: this.state.page === 0 ? newProps.job.alljobs : this.state.data.concat(newProps.job.alljobs)
      })
    }
    else {
      this.setState({
        loading: false
      })
    }
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.props.getJob(this.state.page)
  }

  requestMore = () => {
    this.setState({
      page: this.state.page + 1
    }, this.makeRemoteRequest())
  }

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
    console.log('state', this.state)
    return (
      <Container>
        <HeaderSmall
          headerText="All Jobs"
          rightIcon={true}
          rightIconName="ios-options"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          {this.state.data.length !== 0 ? <FlatList
            data={this.state.data}
            renderItem={(items) => (
              <AllJobsItems data={items} />
            )}
            keyExtractor={(item, index) => index}
            refreshing={this.props.job.isProcessing}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.requestMore}
          /> : null}
        </Content >
        <FooterNav2 />
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
    getJob: (count) => dispatch(JobActions.alljobs(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);

