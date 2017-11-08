import React from 'react';
import { Image } from 'react-native';
import { View, Button, Text, Body, Right } from 'native-base';

const Button1 = (props) => {
  return (
    <Button
      onPress={props.onPress}
      block
      style={{
        height: props.height || 40,
        width: props.width || 250,
        alignSelf: "center",
        backgroundColor: props.bgColor || "#FFCC29",
        borderRadius: (props.radius || 25),
        borderWidth: props.borderWidth || null,
        borderColor: props.borderColor || null,
        elevation: 0,
        paddingVertical: 0
      }}>
      <Text
        uppercase={false}
        style={{
          textAlign: "center",
          fontFamily: "calibre",
          color: props.color || "#000",
          fontSize: props.fontSize || 17,
        }}>
        {props.buttonText}</Text>
    </Button>
  )
}

export default Button1;
