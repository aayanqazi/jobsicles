import React, { Component } from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

class FooterNav extends Component {
  render() {
    return (
      <Footer style={{ height: 60 }} >
        <FooterTab style={{ height: 60, backgroundColor: "#fff" }}>
          <Button transparent vertical>
            <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../../assets/icons/emp_homegray.png')} />
            <Text uppercase={true} style={styles.textStyles}>home</Text>
          </Button>
          <Button transparent vertical>
            <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../../assets/icons/jsjobsgray.png')} />
            <Text uppercase={true} style={styles.textStyles}>my jobs</Text>
          </Button>
          <Button transparent vertical>
            <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../../assets/icons/emp_applicationsgray.png')} />
            <Text uppercase={true} style={styles.textStyles}>applications</Text>
          </Button>
          <Button transparent vertical>
            <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../../assets/icons/emp_interviewsgray.png')} />
            <Text uppercase={true} style={styles.textStyles}>interviews</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = {
  iconStyles: {
    color: "#9d9d9c"
  },
  textStyles: {
    fontSize: 8,
    color: "#9d9d9c"
  }
}

export default FooterNav;