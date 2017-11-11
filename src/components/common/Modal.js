import React, { Component } from 'react';
import { TouchableOpacity, Modal, Image } from 'react-native';
import { View, Text, Content, Icon, Right, Body } from 'native-base';
import Button from '../components/Button';

export default class Popup extends Component {
  state = {
    visible: this.props.modalVisible
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => this.setState({ visible: false })}
      >
        <View style={styles.modalStyles}>
          <Image style={styles.icon} resizeMode="contain" source={require('../resources/icons/status_approve_accept.png')} />

          <Text style={styles.title}>Application Submitted</Text>

          <View style={{ marginVertical: 20 }}>
            <Button onPress={() => this.setState({ visible: false })} radius={10} buttonText="OK" color="#fff" bgColor="#243747" width={120} />
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
  title: {
    fontSize: 20,
    fontFamily: "calibre",
    alignSelf: "center",
  },
  modalStyles: {
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: .7,
    borderColor: "#9d9d9c",
    marginTop: "10%"
  },
}
