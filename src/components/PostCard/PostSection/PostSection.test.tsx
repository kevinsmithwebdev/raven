import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {Text, View} from 'react-native';
import PostSection from './PostSection';

const DummyChildren = () => (
  <View testID="dummy-children-view">
    <Text>Dummy Child 1</Text>
    <Text>Dummy Child 2</Text>
    <Text>Dummy Child 3</Text>
  </View>
);

const dummyLabel = 'Dummy Label';
const dummyTestID = 'dummy-test-id';

describe('PostSection', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(
        <PostSection label={dummyLabel} testID={dummyTestID}>
          <DummyChildren />
        </PostSection>,
      );
    });

    it('should have container', () => {
      expect(screen.getByTestId('dummy-children-view')).toBeTruthy();
    });

    it('should have dummy test 1', () => {
      expect(screen.getByText('Dummy Child 1')).toBeTruthy();
    });

    it('should have dummy test 2', () => {
      expect(screen.getByText('Dummy Child 2')).toBeTruthy();
    });

    it('should have dummy test 3', () => {
      expect(screen.getByText('Dummy Child 3')).toBeTruthy();
    });

    it('should render it test id parameter', () => {
      expect(screen.getByTestId(dummyTestID)).toBeTruthy();
    });
  });
});
