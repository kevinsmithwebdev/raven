import React from 'react';
import {mockUsers} from '../../../__mocks__/users.mocks';
import {render, screen} from '@testing-library/react-native';
import PostViewUser from './PostViewUser';

const mockUser = mockUsers[2];

describe('PostViewUser', () => {
  describe('rendering', () => {
    describe('with user', () => {
      beforeEach(() => {
        render(<PostViewUser user={mockUser} />);
      });

      it('should render section', () => {
        expect(screen.getByTestId('post-view-user')).toBeTruthy();
      });

      it('should have section label', () => {
        expect(screen.getByText('Poster')).toBeTruthy();
      });

      const testMatrix = [
        {label: 'Name', value: mockUser.name},
        {label: 'username', value: mockUser.username},
        {label: 'email', value: mockUser.email},
        {label: 'Company', value: mockUser.company.name},
      ];

      describe.each(testMatrix)('for line $label', ({label, value}) => {
        // to prevent conflict between "name" and "username"
        const testString = new RegExp(`${label}: `, 'gm');

        it(`should have label "${label}"`, () => {
          expect(screen.getByText(testString)).toBeTruthy();
        });

        it(`should have value for "${label}", "${value}"`, () => {
          expect(screen.getByText(value)).toBeTruthy();
        });
      });
    });

    describe('with null user', () => {
      beforeEach(() => {
        render(<PostViewUser user={null} />);
      });

      it('should render null', () => {
        expect(screen.toJSON()).toBeNull();
      });
    });
  });
});
