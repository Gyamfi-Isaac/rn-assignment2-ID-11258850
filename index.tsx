import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Isaac</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Increase the font size
  },
  boldText: {
    fontWeight: 'bold', // Make the name bold
  },
});
