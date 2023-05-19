import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    borderRadius: 8,
    height: 60,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
  },
})

export default styles;