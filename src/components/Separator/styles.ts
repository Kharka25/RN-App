import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  line: {
    backgroundColor: colors.grey100,
    flex: 1,
    height: 1,
  },
  text: {
    color: colors.blue200,
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});

export default styles;