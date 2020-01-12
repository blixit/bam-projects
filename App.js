import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';
import { useQuery } from '@apollo/client';

import { withApollo } from './core/client/client';
import { withErrorBoundary } from './core/errors/ErrorBoundary';
import { GET_PROJECTS } from './graphql/queries/projects';
import ProjectItem from './components/projects/ProjectItem';
import IconButton from './components/buttons/IconButton';


const App = () => {
  const { loading, error, refetch, data: { projects } = {} } = useQuery(GET_PROJECTS);

  if (loading) { return <Text>loading ...</Text>; }
  if (error) { return null; }

  // only display non private projects
  const ProjectsList = () => projects
    .filter(p => !p.isprivate)
    .map(p => <ProjectItem {...p} key={p.id} />);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.welcome}>Welcome to the BAM projects list</Text>
      <ScrollView >
        <ProjectsList />
      </ScrollView>
      <View style={styles.actions}>
        <IconButton
          name="refresh"
          text="Refresh"
          onClick={() => refetch()}
          styleIcon={{
            backgroundColor: '#3282b8'
          }}
        />
      </View>
    </View>
  );
}

export default withApollo(
  withErrorBoundary(App)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10
  },
  welcome: {
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  actions: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
