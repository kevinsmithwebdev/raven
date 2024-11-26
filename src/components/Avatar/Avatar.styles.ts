import {StyleSheet} from 'react-native';

const AVATAR_SIZE = 30;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    backgroundColor: 'blue',
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#fff',
    fontWeight: 700,
  },
});
