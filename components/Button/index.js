import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from "prop-types";
import {FontAwesome} from "@expo/vector-icons";

function Button({iconName, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    )
}

Button.propTypes={
    iconName: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired
}

export default Button;