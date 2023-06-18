import { StyleSheet } from 'react-native';
import {colors} from '../../constants'

export const styles = StyleSheet.create({
  container: {
    position:'absolute',
    left:0,
    backgroundColor: colors.gray[700],
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
