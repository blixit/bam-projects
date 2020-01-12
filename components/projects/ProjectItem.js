import React from 'react';
import { Text, View, StyleSheet, Linking, Alert, Button } from 'react-native';
import PropTypes from 'prop-types';

import IconButton from '../buttons/IconButton';

const openLink = (url) => {
  Linking.canOpenURL().then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert("The link can't be opened");
    }
  });
}

const ProjectItem = (props) => {
  const {
    id,
    name,
    description,
    git_url,
    owner,
    isprivate,
    stargazers_count
  } = props;

  return (
    <View style={styles.projectItem} key={id}>
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.projectOwner}>By {owner}</Text>
      <Text style={{ display: description ? 'flex' : 'none' }}>{description}</Text>
      <View style={styles.githubContainer}>
        <IconButton
          name="star"
          text={String(stargazers_count)}
        />
        <IconButton
          name="github"
          onPress={() => openLink(git_url)}
          text='Github'
        />
      </View>
    </View>
  )
};

ProjectItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  git_url: PropTypes.string,
  owner: PropTypes.string,
  isprivate: PropTypes.bool,
  stargazers_count: PropTypes.number
};

const styles = StyleSheet.create({
  projectItem: {
    position: 'relative',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  projectName: {
    fontWeight: 'bold',
    color: '#5f6caf'
  },
  projectOwner: {
    fontStyle: 'italic',
    fontSize: 11
  },
  githubContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonIcon: {
    backgroundColor: 'silver',
    padding: 5,
    margin: 2
  },
  buttonText: {
    fontSize: 16
  }
});

export default ProjectItem;
