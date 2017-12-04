import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Right, Container, Content, View, Text, Icon } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import { Actions } from "react-native-router-flux";

const ActiveJobsTab = ({ data, index }) => {
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
    <ListItem key={index} onPress={() => Actions.push('jobDetails', { job: data })}>
      <View key={index} style={styles.rowStyles}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.text1}>{data.jobTitle}</Text>

          <View style={styles.row2Styles}>
            {/* <Image resizeMode="contain" style={styles.smallImage} source={require('.../../assets/icons/job_employer.png')} /> */}
            <Text style={styles.smallText}>{data.companyTitle}</Text>
          </View>

          <View style={styles.row2Styles}>
            {/* <Image resizeMode="contain" style={styles.smallImage} source={require('.../../assets/icons/job_salary.png')} /> */}
            <Text style={styles.smallText}>{data.salaryRange.toUpperCase()}</Text>
          </View>

          <View style={styles.row2Styles}>
            {/* <Image resizeMode="contain" style={styles.smallImage} source={require('.../../assets/icons/job_location.png')} /> */}
            <Text style={styles.smallText}>{upperCase(data.location[0])}</Text>
          </View>
          <View style={styles.row2Styles}>
            {/* <Image resizeMode="contain" style={styles.smallImage} source={require('.../../assets/icons/job_type.png')} /> */}
            <Text style={styles.smallText}>{upperCase(data.jobType[0])}</Text>
          </View>

        </View>
        <Right>
          <View style={styles.rowStyles}>
            {/* <Image resizeMode="contain" style={styles.rightIcons} source={require('.../../assets/icons/saved_small.png')} /> */}
          </View>
        </Right>

      </View>
    </ListItem>
  )
}
const upperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export default class SearchResults extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <HeaderSmall
          headerText={`Search Results (${this.props.data.message === "no record found" ? 0 : this.props.data.record.length})`}
          leftText="BACK"
          leftAction={() => Actions.pop()}
        />
        <Content style={{ backgroundColor: "#fff" }}>
          {this.props.data.message === "no record found" ? <Text> No Jobs Found</Text> : this.props.data.record.map((arr, ind) => (
            <ActiveJobsTab key={ind} data={arr} index={ind} />
          ))}
        </Content >
      </Container >
    )
  }
}