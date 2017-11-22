import React, { Component } from 'react';
import { TouchableOpacity, Image, Linking } from 'react-native'
import { ListItem, Right, Container, Content, View, Text } from 'native-base';
import HeaderSmall from './common/HeaderSmall';
import Loader from "../../assets/animations/loading.json";
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
import { Actions } from "react-native-router-flux";

export default class Employer extends Component {
  state = {
    loading: true,
    animation: null,
    data: null
  }

  componentWillMount() {
    this._playAnimation();
    this.makeRequest(this.props.jobId)
  }

  makeRequest = (value) => {
    fetch('https://jobsicle.mv/api.php?action=get_employer_detail&tokenID=123&employerID=' + value)
      .then(arr => {
        return arr.json();
      })
      .then(data => {
        this.setState({
          loading: false,
          data: data.record
        })
      })
      .catch(err => {
        console.log(arr);
      })
  }

  loaderStart = () => {
    this.animation.reset();
    this.animation.play();
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };


  _loadAnimationAsync = async () => {

    this.setState(
      { animation: Loader },
      this._playAnimation
    );
  };

  _renderData = (value) => {
    return (
      <Content style={{ backgroundColor: "#fff" }}>
        {value.imageURL ? <View style={styles.circle}><Image resizeMode="contain" style={styles.image} source={{ uri: value.imageURL }} /></View> : <View style={styles.circle} />}
        <Text style={styles.text1}>{value.employerTitle}</Text>
        <View style={styles.box}>
          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/empview_phone.png')} />
            <Text style={styles.smallText} onPress={() => Linking.openURL(`tel:${value.phoneNo}`)}>{value.phoneNo ? value.phoneNo : '-'}</Text>
          </View>

          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/empview_address.png')} />
            <Text style={styles.smallText}>{value.address ? value.address : '-'}</Text>
          </View>

          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/empview_mail.png')} />
            <Text style={styles.smallText}>{value.email ? value.email : '-'}</Text>
          </View>
          <View style={styles.row2Styles}>
            <Image resizeMode="contain" style={styles.smallImage} source={require('../../assets/icons/empview_web.png')} />
            <Text style={styles.smallText} onPress={() => Linking.openURL(`http://${value.website}`)}>{value.website ? value.website : '-'}</Text>
          </View>
        </View>
        <Text style={styles.bottomText}>{value.employerDescription}</Text>
      </Content >

    )
  }
  render() {
    console.log(this.state)
    return (
      <Container>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            style={this.state.loading ? {
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

        <HeaderSmall
          headerText="Employer"
          leftText="BACK"
          leftAction={() => Actions.pop()}
        />
        {this.state.data ? this._renderData(this.state.data) : null}
      </Container >
    )
  }
}

const styles = {
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#e5e5ea",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "#e5e5ea",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5
  },
  image: {
    height: '100%'
  },
  text1: {
    fontFamily: "calibre",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 5
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
  bottomText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "calibre",
    paddingHorizontal: 20,
    marginTop: 20,
  },
}