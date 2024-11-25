import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import PostCard from './PostCard';
import * as useUsersZustand from '../../state/users/users.zustand';
import * as usePostsZustand from '../../state/posts/posts.zustand';
import {mockPosts} from '../../__mocks__/posts.mocks';
import {mockUsers} from '../../__mocks__/users.mocks';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const mockPost = mockPosts[42];

const mockPostWithUnknownUser = {
  ...mockPost,
  userId: -1,
};

const mockUser = mockUsers[7];

const getUserById = (userId: number) => (userId === 5 ? mockUser : undefined);

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(useUsersZustand, 'useUsersZustand').mockReturnValue({getUserById});
  jest
    .spyOn(usePostsZustand, 'usePostsZustand')
    .mockReturnValue({posts: mockPosts});
});

describe('PostCard', () => {
  describe('with good data', () => {
    beforeEach(() => {
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
      render(<PostCard {...mockPostWithUnknownUser} />);
    });

    it('should have title', () => {
      expect(screen.getByText(mockPost.title)).toBeTruthy();
    });

    it('should have no user name', () => {
      expect(screen.getByText('N/A')).toBeTruthy();
    });
  });

  describe('pressing card', () => {
    beforeEach(() => {
      render(<PostCard {...mockPost} />);

      fireEvent.press(screen.getByRole('button', {name: 'post card'}));
    });

    it('should call navigation with the correct params', () => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('PostView', {
        postId: 43,
        postTitle:
          'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis',
      });
    });
  });
});
