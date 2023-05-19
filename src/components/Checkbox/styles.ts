import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  checkIcon: {
    height: 9,
    width: 12,
  },
  container: {
    borderColor: colors.borderBlue,
    borderRadius: 4,
    borderWidth: 1,
    height: 22,
    width: 22,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: colors.borderBlue,
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
});

export default styles;