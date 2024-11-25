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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  titleText: {
    fontWeight: 600,
    color: '#222',
    marginRight: 4,
  },
  bodyText: {
    fontWeight: 400,
    marginRight: 4,
  },
});
