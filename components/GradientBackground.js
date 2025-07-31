import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }) => (
  <LinearGradient
    colors={[
      '#000000', '#090003', '#100008', '#14000e', '#160014',
      '#1e061e', '#240b29', '#2b0d35', '#3e0f4a', '#520f5f',
      '#680b74', '#7f0089'
    ]}
    style={styles.background}
  >
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default GradientBackground;