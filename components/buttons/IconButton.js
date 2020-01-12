import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = (props) => {
  const { name, text, onClick, styleIcon, styleText } = props;
  const _styleIcon = {
    ...styles.buttonIcon,
    ...styleIcon
  };
  
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

IconButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  styleIcon: PropTypes.object,
  styleText: PropTypes.object
};

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

export default IconButton;
