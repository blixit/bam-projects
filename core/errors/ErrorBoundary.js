import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return {
      error,
      hasError: true
    };
  }

  render() {
    const { error, hasError } = this.state;
    if (hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <View style={styles.container}>
          <Text>Something went wrong: {error}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object
};

export const withErrorBoundary = Component => () => (
  <ErrorBoundary>
    <Component />
  </ErrorBoundary>
);

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
