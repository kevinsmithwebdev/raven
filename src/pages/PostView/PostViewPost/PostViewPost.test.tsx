import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {mockPosts} from '../../../__mocks__/posts.mocks';
import PostViewPost from './PostViewPost';
import {splitMultiLineText} from '../../../utils/string/splitMultiLineText';

const mockPost = mockPosts[12];
const bodyLinesToCheck = splitMultiLineText(mockPost.body);

describe('PostViewPost', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(<PostViewPost post={mockPost} />);
    });

    it('should render the component', () => {
      expect(screen.getByTestId('post-view-post')).toBeTruthy();
    });

    it('should have section label', () => {
      expect(screen.getByText('Post')).toBeTruthy();
    });

    it('should have title label', () => {
      expect(screen.getByText('Title')).toBeTruthy();
    });

    it('should have title value', () => {
      expect(screen.getByText(mockPost.title)).toBeTruthy();
    });

    it('should have Body label', () => {
      expect(screen.getByText('Body')).toBeTruthy();
    });

    it.each(bodyLinesToCheck)('should have body value: "%s"', bodyLine => {
      expect(screen.getByText(bodyLine)).toBeTruthy();
    });
  });
});
