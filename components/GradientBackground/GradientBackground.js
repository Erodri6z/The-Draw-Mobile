import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles'

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

export default GradientBackground;