import React, { Component } from 'react';
import { TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Container, View, Text, Content, Icon, Right, Body } from 'native-base';

const { width, height } = Dimensions.get('window')

export default class PDFModal extends Component {
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
        <Content>

          <View style={styles.modalStyles}>
            <View style={styles.rowStyles}>
              <Text style={styles.title}>View CV</Text>
              <Right>
                <TouchableOpacity onPress={() => this.setState({ visible: !this.state.visible })}>
                  <Icon style={{ fontSize: 30, marginRight: 20 }} name="ios-close-circle-outline" />
                </TouchableOpacity>
              </Right>
            </View>

            <View style={styles.pdfBox}>
              <Text style={{ color: "#fff", margin: 20, }}>PDF VIEWER</Text>
            </View>
          </View>
        </Content>
      </Modal >
    )
  }
}

const styles = {
  pdfBox: {
    marginHorizontal: 8,
    backgroundColor: "#333",
    height: height - 95
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  title: {
    fontSize: 26,
    fontFamily: "calibre",
    alignSelf: "center",
    marginLeft: 20
  },
  modalStyles: {
    height: height - 25,
    borderRadius: 10,
    width: "97%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#9d9d9c",
  },
}
