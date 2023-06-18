import { StyleSheet } from 'react-native';
import { colors } from '../../constants';
import { vh } from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.gray[700],
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
  },
  drawerContent: {
    position: 'absolute',
    left: 0,
    width: '80%',
    marginTop: 25,
    height: vh(100),
    backgroundColor: colors.gray[400],
    borderRadius:10,
    padding:15,
    textAlign:'center'
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
