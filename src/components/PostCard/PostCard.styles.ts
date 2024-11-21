import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
    margin: 8,
    padding: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  titleText: {
    fontWeight: 600,
  },
  userTextWrapper: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  userText: {
    fontStyle: 'italic',
  },
  loaderWrapper: {},
});
