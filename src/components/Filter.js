import React, { Component } from 'react';
import { TouchableOpacity, Modal, Image } from 'react-native';
import { View, Text, Content, Icon, Right, Body } from 'native-base';
import Button from './common/Button';
import { Ionicons ,Feather} from "@expo/vector-icons"

export default class Filter extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.change}
      >
        <View style={styles.modalStyles}>
          <View style={
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00bbb1',
              width: '100%',
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.title}>Job Filters</Text>
          </View>
          <View style={
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 13,
              paddingRight: 8,              
              width: '100%',
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.subtitle}>Most Recent</Text>
            <Feather name="check" size={24} color="#00bbb1" />

          </View>
          <View style={
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 13,
              width: '100%',
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.subtitle}>Expiring Soon</Text>
          </View>
          <View style={
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 13,
              paddingRight:13,
              width: '100%',
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.subtitle}>Location</Text>
            <Ionicons name="ios-arrow-forward-outline" size={25} />

          </View>
          <View style={
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 13,
              paddingRight:13,              
              width: '100%',
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.subtitle}>Category</Text>
            <Ionicons name="ios-arrow-forward-outline" size={25} />

          </View>
          <View style={
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 13,
              paddingRight:13,              
              width: '100%',
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              height: 40,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
            <Text style={styles.subtitle}>Salary Range</Text>
            <Ionicons name="ios-arrow-forward-outline" size={25} />

          </View>

          <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{marginRight:10}}>
              <Button onPress={this.props.change} radius={20} buttonText="Apply" color="#fff" bgColor="#00bbb1" width={80} />
            </View>
            <View>
            <Button onPress={this.props.change} radius={20} buttonText="Reset" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
          </View>
        </View>
      </Modal >
    )
  }
}

const styles = {
  icon: {
    width: 40,
    height: 40,
    marginVertical: 20
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "calibre",
    alignSelf: "center",
    fontWeight: 'bold'
  },
  title: {
    fontSize: 26,
    fontFamily: "calibre",
    alignSelf: "center",
    color: 'white',
    fontWeight: 'bold'
  },
  modalStyles: {
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: .7,
    borderColor: "#9d9d9c",
    marginTop: "50%"
  },
}
