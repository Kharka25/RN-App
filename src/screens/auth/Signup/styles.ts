import {Platform, StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    marginVertical: 25
  },
  container: {
    padding: Platform.OS === 'android' ? 20 : 24
  },
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
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
  footerTxt: {
    color: colors.blue100,
    marginHorizontal: 13,
  },
  footerTxtBold: {
    fontWeight: 'bold',
  },
});

export default styles;