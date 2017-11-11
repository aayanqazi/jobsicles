import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Right, Container, Content, View, Text } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import FooterNav2 from './common/FooterNav2';

const AllJobsItems = () => {
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
            <Text style={styles.text1}>Admin Officer & Clerical Assist</Text>

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
            <Text style={styles.text1}> Procuremental Officer & Regional Manager</Text>

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
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/notsaved_small.png')} />
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
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../../assets/icons/jsactivitygreen.png')} />
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


export default class MyJobs extends Component {
  render() {
    return (
      <Container>
        <HeaderSmall
          headerText="All Jobs"
          rightIcon={true}
          rightIconName="ios-options"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <AllJobsItems />
        </Content >
        <FooterNav2 />
      </Container >
    )
  }
}