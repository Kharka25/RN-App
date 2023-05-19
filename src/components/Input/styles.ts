import {StyleSheet} from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  eye: {
    height: 24,
    marginHorizontal: 16,
    width: 24,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: colors.borderBlue,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
  },
  label: {
    color: colors.blue200,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8
  },
});

export default styles;