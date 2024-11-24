import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 40,
  },
  footerButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonClear: {
    backgroundColor: '#FFA500',
  },
  footerButtonApply: {
    backgroundColor: 'green',
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 500,
  },
});
