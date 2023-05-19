import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    height: 200,
    width: '100%',
  },
  innerTitle: {
    color: colors.lightOrange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue100,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    marginVertical: 54,
  },
});

export default styles;