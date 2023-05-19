import {Platform, StyleSheet} from 'react-native'
import colors from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    marginVertical: 25
  },
  container: {
    padding: Platform.OS === 'android' ? 20 : 24
  },
  footerText: {
    color: colors.blue100,
    marginBottom: 36,
    marginVertical: 35,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: '500',
  },
});

export default styles;