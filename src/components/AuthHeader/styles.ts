import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 18,
    width: 18,
  },
  title: {
    color: colors.blue100,
    fontSize: 26,
    fontWeight: '600',
    paddingHorizontal: 16
  },
});

export default styles;