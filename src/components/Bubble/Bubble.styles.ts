import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  speech: {
    margin: 4,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    zIndex: 999,
  },
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    left: 10,
  },
  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    left: 20,
  },
  leftText: {
    marginLeft: 30,
    marginBottom: -10,
  },

  rightArrow: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    right: 10,
  },
  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    right: 20,
  },
  rightText: {
    marginRight: 30,
    marginBottom: -10,
    textAlign: 'right',
  },
});
