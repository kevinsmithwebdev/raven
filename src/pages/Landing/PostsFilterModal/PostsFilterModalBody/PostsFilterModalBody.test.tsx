import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {mockUsers} from '../../../../__mocks__/users.mocks';
import PostsFilterModalBody from './PostsFilterModalBody';

const setLocalUserId = jest.fn();

beforeEach(jest.clearAllMocks);

describe('PostsFilterModalBody', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(
        <PostsFilterModalBody
          users={mockUsers}
          setLocalUserId={setLocalUserId}
          localUserId={2}
        />,
      );
    });

    it(`should render ${mockUsers.length} cards`, () => {
      expect(screen.getAllByTestId('filter-line')).toHaveLength(
        mockUsers.length,
      );
    });
  });

  describe('pressing', () => {
    const lineToPress = 7;
    const userIDPressed = mockUsers[lineToPress - 1].id;
    beforeEach(() => {
      render(
        <PostsFilterModalBody
          users={mockUsers}
          setLocalUserId={setLocalUserId}
          localUserId={null}
        />,
      );

      const lines = screen.getAllByTestId('filter-line');

      fireEvent.press(lines[lineToPress - 1]);
    });

    it('should call setLocalUserId', () => {
      expect(setLocalUserId).toHaveBeenCalledTimes(1);
      expect(setLocalUserId).toHaveBeenCalledWith(userIDPressed);
    });
  });
});
