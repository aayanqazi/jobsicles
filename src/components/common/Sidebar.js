import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, View, Text, Icon } from 'native-base';
import Drawer from 'react-native-drawer'

class ControlPanel extends Component {
  render() {
    return (
      <Content style={styles.panelStyles}>
        <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity>
            <Icon style={styles.iconStyles} name="ios-close-circle-outline" />
          </TouchableOpacity>
          <Text style={styles.titleStyles}>{this.props.Title}</Text>
          <View style={styles.listContainer}>
            <Text style={styles.textStyles}>Edit Profile</Text>
            <Text style={styles.textStyles}>My Package</Text>
            <Text style={styles.textStyles}>Share App</Text>
            <Text style={styles.textStyles}>Rate this App</Text>
            <Text style={styles.textStyles}>Terms of use</Text>
            <Text style={styles.textStyles}>About</Text>
            <Text style={styles.textStyles}>Logout</Text>
          </View>

          <Text style={styles.textStyles}>Need help?</Text>
          <Text style={styles.text2Styles}>Shoot your queries to mail@jobsicle.mv</Text>
        </View>
      </Content >
    )
  }
}

export default class Sidebar extends Component {
  render() {
    return (
      <Drawer
        tapToClose={true}
        open={true}
        type="overlay"
        content={<ControlPanel Title={this.props.Title} />}
        openDrawerOffset={100}
      >
        {this.props.children}
      </Drawer>
    )
  }
}

const styles = {
  panelStyles: {
    paddingTop: 30,
    backgroundColor: "#efeff4"
  },
  iconStyles: {
    fontSize: 25,
  },
  titleStyles: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "calibre",
    paddingVertical: 10,
    borderBottomWidth: .5,
    borderBottomColor: "#9d9d9c",
    // fontWeight: '500'
  },
  listContainer: {
    paddingVertical: 15,
    borderBottomWidth: .5,
    borderBottomColor: "#9d9d9c",
    marginBottom: 5,
  },
  textStyles: {
    paddingVertical: 6,
    fontSize: 22,
    fontFamily: "calibre",
    marginLeft: 5,
  },
  text2Styles: {
    fontFamily: "calibre",
    fontSize: 18,
    paddingRight: 5
  },
}