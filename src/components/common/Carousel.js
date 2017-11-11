import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

var Dot = () => {
  return (
    <View
      style={{
        backgroundColor: "#f4f5f6",
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
        marginVertical: 3,
        borderWidth: .5,
        borderColor: "#243747"
      }} />
  )
}

export default class Carousel extends Component {
  render() {
    return (
      <Swiper
        loop={false}
        autoplay={false}
        showsPagination={true}
        activeDotStyle={{ borderRadius: 100, backgroundColor: "#243747", height: 10, width: 10 }}
        paginationStyle={{ bottom: this.props.paginationHeight }}
        dot={<Dot />}
        style={{
          backgroundColor: "transparent",
          height: this.props.carouselHeight,
        }}
        showsButtons={false}>
        {this.props.children}
      </Swiper>
    )
  }
}
