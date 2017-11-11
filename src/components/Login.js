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

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  onLogin = () => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    })
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      if (newProps.auth.authUser) {
        await AsyncStorage.setItem('user', JSON.stringify({
            isLoggedIn: true,
            cookie: newProps.auth.authUser.cookie,
            id:newProps.auth.authUser.user.id,
        }));
        console.log("(user logged in)");
    }
      Actions.push('alljobs');
    }
    else if (newProps.auth.isError) {
      alert('Something Went Wrong !')
    }
  }

  render() {
    console.log(this.props)
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Content>
          <View style={styles.upperBox}>
            <Image style={styles.logo} resizeMode="contain" source={require('../../assets/icons/login_logo.png')} />
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <Item>
              <Input onChangeText={(value) => { this.setState({ username: value }) }} style={styles.input} keyboardType="email-address" placeholder="E-mail" />
            </Item>
            <Item>
              <Input onChangeText={(value) => this.setState({
                password: value
              })} style={styles.input} secureTextEntry={true} placeholder="Password" />
              <Icon name="ios-eye-outline" />
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