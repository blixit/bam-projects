import React from 'react';
import { Text, View, StyleSheet, Linking, Alert, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
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
    full_name,
    git_url,
    owner,
    isprivate,
    node_id,
    stargazers_count
  } = props;

  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  if (isprivate) {
    return null;
  }

  return (
    <View style={styles.projectItem} key={id}>
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.projectOwner}>By {owner}</Text>
      <Text style={{ display: description ? 'flex' : 'none' }}>{description}</Text>
      <View style={styles.githubContainer}>
        <Icon
          name="star"
          style={styles.buttonIcon}>
          <Text style={styles.buttonText}> {stargazers_count}</Text>
        </Icon>
        <Icon
          name="github"
          onPress={() => openLink(git_url)}
          style={styles.buttonIcon}>
          <Text style={styles.buttonText}> github</Text>
        </Icon>
      </View>
    </View>
  )
};

export default ProjectItem;

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