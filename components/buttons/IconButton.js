import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default (props) => {
  const { name, text, onClick, styleIcon, styleText } = props;
  const _styleIcon = {
    ...styles.buttonIcon,
    ...styleIcon
  };
  console.log(_styleIcon);
  
  const _styleText = {
    ...styles.buttonText,
    ...styleText
  };
  return (
    <Icon
      name={name}
      onPress={onClick}
      style={_styleIcon}>
      <Text style={_styleText}> {text}</Text>
    </Icon>
  );
}


const styles = StyleSheet.create({
  buttonIcon: {
    backgroundColor: 'silver',
    padding: 5,
    margin: 2
  },
  buttonText: {
    fontSize: 16
  }
});