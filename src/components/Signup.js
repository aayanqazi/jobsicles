import React, { Component } from 'react';
import { Container, Content, View, Text, Input, Item, Icon, Right, CheckBox } from 'native-base';
import Button from './common/Button';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux'
import AuthActions from "../store/actions/auth";
import Material from 'react-native-vector-icons/MaterialIcons';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
import Loader from "../../assets/animations/loading.json";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      username: '',
      password: '',
      confirm: '',
      matchPasswordError: false,
      usernameError: false,
      passwordError: false,
      confirmError: false,
      animation: null,
      errMsg: ''
    }
  }

  onPress() {
    this.setState({ checked: !this.state.checked })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.auth.isRegistered) {
      if (newProps.auth.authUser) {
        console.log("(user signed Up)");
      }
      Actions.push('login');
    }
    else if (newProps.auth.isError) {
      alert('Something Went Wrong !');
      this.setState({
        usernameError: true,
        passwordError: true,
        errorMsg: newProps.auth.errorMessage
      })
    }
  }

  onSubmit = () => {
    if (this.state.username === '' || this.state.password === '' || this.state.confirm === "") {
      if (this.state.username === '' && this.state.password === '' && this.state.confirm === "") {
        this.setState({
          usernameError: true,
          passwordError: true,
          confirmError: true
        })
      }
      else if (this.state.username === '') {
        this.setState({
          usernameError: true
        })
      }
      else if (this.state.password === '') {
        this.setState({
          passwordError: true
        })
      }
      else if (this.state.confirm === '') {
        this.setState({
          confirmError: true
        })
      }
    }
    else if (this.state.password != this.state.confirm) {
      this.setState({
        confirmError: true,
        matchPasswordError: true
      })
    }
    else if (!this.state.checked) {
      alert('Please checked term and condition')
    }
    else {
      var obj = {
        username: this.state.username,
        email: this.state.username,
        password: this.state.password,
        role: this.props.role
      }
      this.props.signup(obj);

    }
  }
  onUsername = (value) => {
    if (value !== '') {
      this.setState({
        usernameError: false
      })
    }
    this.setState({ username: value });
  }

  onPassword = (value) => {
    if (value !== '') {
      this.setState({
        passwordError: false
      })
    }
    this.setState({ password: value });
  }

  onConfirm = (value) => {
    if (this.state.password === value) {
      this.setState({
        matchPasswordError: false
      })
    }
    else if (value == '') {
      this.setState({
        confirmError: false
      })
    }
    this.setState({ confirm: value });
  }

  _loadAnimationAsync = async () => {

    this.setState(
      { animation: Loader },
      this._playAnimation
    );
  };

  componentWillMount() {
    this._playAnimation();
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  loaderStart = () => {
    this.animation.reset();
    this.animation.play();
  }

  render() {
    console.log(this.props)
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            style={this.props.auth.isProcessing ? {
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
        <Content>
          <View style={{ marginHorizontal: 15 }}>
            <Icon onPress={() => Actions.pop()} style={styles.backIcon} name="md-arrow-back" />
            <Text style={styles.title}>Enter your email and set a password</Text>
            <Item style={this.state.usernameError ? { borderBottomColor: 'red' } : null}>
              <Input onChangeText={(value) => { this.onUsername(value) }} keyboardType="email-address" placeholder="E-mail" />
              {this.state.usernameError ? <Material name='error' style={{ color: 'red', fontSize: 20, marginTop: 5, marginRight: 5 }} /> : null}
            </Item>

            <Item style={this.state.passwordError ? { borderBottomColor: 'red' } : null}>
              <Input secureTextEntry={true} onChangeText={(value) => { this.onPassword(value) }} placeholder="Password" />
              <Icon name="ios-eye-outline" style={this.state.passwordError ? { color: 'red' } : null} />
            </Item>

            <Item style={this.state.confirmError ? { borderBottomColor: 'red' } : null}>
              <Input secureTextEntry={true} onChangeText={(val) => this.onConfirm(val)} placeholder="Confirm password" />
              <Icon name="ios-eye-outline" style={this.state.confirmError ? { color: 'red' } : null} />
            </Item>
            {
              this.state.matchPasswordError ? <Text style={{ color: 'red', textAlign: 'center' }}>
                Password not matched !
            </Text> : null
            }

            <View style={styles.row}>
              <CheckBox onPress={this.onPress.bind(this)} checked={this.state.checked} color="#243747" />
              <Text style={styles.smallText}>I agree to the terms & conditions. </Text>
            </View>
            {/* {this.state.errorMsg ? <Text style={[styles.smallText, { textAlign: "center", color: 'red' }]}> {this.state.errorMsg.error}</Text> : null} */}

            <View style={{ marginVertical: 5 }}>
              <Button onPress={this.onSubmit} disabled={this.state.checked} buttonText="Let's Go" color="#fff" bgColor="#243747" width="100%" />
            </View>

          </View>
        </Content>
      </Container >
    )
  }
}

const styles = {
  row: {
    marginVertical: 20,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "calibre",
    fontSize: 30,
    marginBottom: 20,
    color: "#243747"
  },
  backIcon: {
    marginVertical: 30,
    fontSize: 30,
  },
  smallText: {
    fontSize: 14,
    fontFamily: "calibre",
    color: "#243747",
    marginLeft: 20
  },
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userObj) => dispatch(AuthActions.signup(userObj))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);