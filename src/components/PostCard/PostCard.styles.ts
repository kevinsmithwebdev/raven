import {StyleSheet} from 'react-native';

const shadowProps = {
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowColor: '#444',
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 10,
};

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    ...shadowProps,
  },
  wrapper: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
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
