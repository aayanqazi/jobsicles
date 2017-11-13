import React, { Component } from 'react';
import {
  Image,
  AsyncStorage
} from 'react-native';
import { Container, Content, View, Text, Input, Item, Icon, Right } from 'native-base';
import Button from './common/Button';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux'
import AuthActions from "../store/actions/auth";
import Material from 'react-native-vector-icons/MaterialIcons';
import Loader from "../../assets/animations/loading.json";
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameError: false,
    passwordError: false,
    errorMsg: '',
    animation:null,
  }
  onLogin = () => {
    if (this.state.username === '' || this.state.password === '') {
      if(this.state.username === '' && this.state.password === '')
      {
        this.setState({
          usernameError:true,
          passwordError:true
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
    }
    else{
          this.props.login({
      username: this.state.username,
      password: this.state.password
    })
    }
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      if (newProps.auth.authUser) {
        await AsyncStorage.setItem('user', JSON.stringify({
          isLoggedIn: true,
          cookie: newProps.auth.authUser.cookie,
          id: newProps.auth.authUser.user.id,
        }));
        console.log("(user logged in)");
      }
      Actions.replace('alljobs');
    }
    else if (newProps.auth.isError) {
      alert('Something Went Wrong !');
      this.setState({
        usernameError:true,
        passwordError:true,
        errorMsg:newProps.auth.errorMessage
      })
    }
  }

  _loadAnimationAsync = async () => {

    this.setState(
      { animation: Loader },
      this._playAnimation
    );
  };

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
             loop={ true }
            style={this.props.auth.isProcessing?{
              width: '100%',
              height: '100%',
              position:'absolute',
              zIndex:20,
              flex:1,
              backgroundColor:'rgba(0,0,0,0.4)',
              alignItems:'center',
              justifyContent:'center'
            }:{display:'none'}}
            source={this.state.animation}
          />}

        <Content>
          <View style={styles.upperBox}>
            <Image style={styles.logo} resizeMode="contain" source={require('../../assets/icons/login_logo.png')} />
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <Item style={this.state.usernameError ? { borderBottomColor: 'red' } : null}>
              <Input onChangeText={(value) => { this.onUsername(value) }} style={styles.input} keyboardType="email-address" placeholder="E-mail" />
              {this.state.usernameError ? <Material name='error' style={{ color: 'red' ,fontSize:20,marginTop:5}} /> : null}
            </Item>
            <Item style={this.state.passwordError ? { borderBottomColor: 'red' } : null}>
            <Input onChangeText={(value) => { this.onPassword(value) }} style={styles.input} secureTextEntry={true} placeholder="Password" />
              <Icon name="ios-eye-outline" style={this.state.passwordError?{color:'red'}:null} />
            </Item>
            <View style={{ flexDirection: "row" }}>
              <Right><Text style={styles.smallText}>Forgot Password</Text></Right>
            </View>
            
            <View style={{ marginVertical: 5 }}>
              <Button onPress={this.onLogin} buttonText="Login" color="#fff" bgColor="#243747" width="100%" />
            </View>
            <View style={{ marginVertical: 5, marginBottom: 20 }}>
              <Button onPress={() => Actions.push('getStarted')} buttonText="Create Account" width="100%" />
            </View>
            {this.state.errorMsg?<Text style={[styles.smallText, { textAlign: "center",color:'red' }]}> {this.state.errorMsg.error}</Text>:null}
            <Text style={[styles.smallText, { textAlign: "center" }]}> Login with Social Account</Text>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Image style={styles.icons} resizeMode="contain" source={require('../../assets/icons/fb.png')} />
              <Image style={styles.icons} resizeMode="contain" source={require('../../assets/icons/gmail.png')} />
            </View>
          </View>
        </Content>
        <Text style={[styles.smallText, { textAlign: "center", fontSize: 14 }]}> Jobsicle. Careers.mv . v.1.0</Text>
      </Container>
    )
  }
}

const styles = {
  input: {
    fontFamily: "calibre"
  },
  icons: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  smallText: {
    fontFamily: "calibre",
    marginTop: 5,
    marginBottom: 15,
    color: "#243747"
  },
  logo: {
    width: 200,
    height: 155
  },
  upperBox: {
    alignItems: "center",
    // paddingVertical: 20,
    backgroundColor: "#00bbb1"
  },
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userObj) => dispatch(AuthActions.signin(userObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);