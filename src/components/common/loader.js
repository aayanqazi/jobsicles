import React from 'react';
import {View , ActivityIndicator} from "react-native";

const loader = () => {
    return (
        <View style={{ position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        backgroundColor:"#F5FCFF88",
        justifyContent: 'center'}}>
            <ActivityIndicator animating={true} size={"large"} />
        </View >
    )
}

export default loader;

const Styling = {
   
}
