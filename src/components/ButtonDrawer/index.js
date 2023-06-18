import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles'

export const ButtonDrawer = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} >
        <Ionicons name="md-menu"size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};
