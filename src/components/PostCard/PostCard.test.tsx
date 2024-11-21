import React from 'react';
import {Post, User} from '../../types/jsonPlaceholder.types';
import {render, screen} from '@testing-library/react-native';
import PostCard from './PostCard';
import * as useUsersZustand from '../../state/users/users.zustand';

const mockPost = {
  title: 'mock title 123',
  userId: 127,
} as Post;

const mockPostWithUnknownUser = {
  title: 'mock title 123',
  userId: -1,
} as Post;

const mockUser = {
  name: 'Mary Userton',
} as User;

const getUserById = (userId: number) => (userId === 127 ? mockUser : undefined);

describe('PostCard', () => {
  describe('with good data', () => {
    beforeEach(() => {
      jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockReturnValue({getUserById});
      render(<PostCard {...mockPost} />);
    });

    it('should have title', () => {
      expect(screen.getByText(mockPost.title)).toBeTruthy();
    });

    it('should have user name', () => {
      expect(screen.getByText(mockUser.name)).toBeTruthy();
    });
  });

  describe('with no user found', () => {
    beforeEach(() => {
      jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockReturnValue({getUserById});
      render(<PostCard {...mockPostWithUnknownUser} />);
    });

    it('should have title', () => {
      expect(screen.getByText(mockPost.title)).toBeTruthy();
    });

    it('should have no user name', () => {
      expect(screen.getByText('N/A')).toBeTruthy();
    });
  });
});
