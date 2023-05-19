import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.grey700,
    borderRadius: 14,
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    padding: 16,
    width: '45%'
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default styles