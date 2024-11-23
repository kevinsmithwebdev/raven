import {render, screen, within} from '@testing-library/react-native';
import React from 'react';
import PostViewComments from './PostViewComments';
import {mockComments} from '../../../__mocks__/comments.mocks';
import {splitMultiLineText} from '../../../utils/string/splitMultiLineText';

describe('PostViewComments', () => {
  describe('rendering', () => {
    describe('full data', () => {
      beforeEach(() => {
        render(<PostViewComments comments={mockComments} />);
      });

      it('should not render loader', () => {
        expect(screen.queryByTestId('post-view-comments-loader')).toBeNull();
      });

      it('should render PostViewComments', () => {
        expect(screen.getByTestId('post-view-comments')).toBeTruthy();
      });

      it('should show comment count', () => {
        expect(
          within(screen.getByTestId('post-line')).getByText(
            `Number of Comments: ${mockComments.length}`,
            {exact: false},
          ),
        ).toBeTruthy();
      });

      describe.each(mockComments)('for comments', ({email, body, name}) => {
        describe(`for comment for ${email}`, () => {
          it(`should have email label for ${email}`, () => {
            expect(screen.getByText(`${email} says...`)).toBeTruthy();
          });

          it(`should have name ${name}`, () => {
            expect(screen.getByText(name)).toBeTruthy();
          });

          const commentsToCheck = splitMultiLineText(body);

          it.each(commentsToCheck)('should have name %s', comment => {
            expect(screen.getByText(comment)).toBeTruthy();
          });
        });
      });
    });

    describe('when comments is nullish', () => {
      beforeEach(() => {
        render(<PostViewComments comments={null} />);
      });

      it('should render loader', () => {
        expect(screen.getByTestId('post-view-comments-loader')).toBeTruthy();
      });

      it('should not render PostViewComments', () => {
        expect(screen.queryByTestId('post-view-comments')).toBeNull();
      });
    });

    describe('when comments is empty', () => {
      beforeEach(() => {
        render(<PostViewComments comments={[]} />);
      });

      it('should render null', () => {
        expect(screen.toJSON()).toBeNull();
      });
    });
  });
});
