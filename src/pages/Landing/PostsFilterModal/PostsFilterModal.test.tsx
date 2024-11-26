import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import PostsFilterModal from './PostsFilterModal';
import * as useUsersZustand from '../../../state/users/users.zustand';
import {mockUsers} from '../../../__mocks__/users.mocks';

const closeModal = jest.fn();
const setSelectedFilterUserId = jest.fn();
const selectedFilterUserId = null;

beforeEach(jest.clearAllMocks);

describe('PostsFilterModal', () => {
  describe('rendering', () => {
    describe('when visible', () => {
      const isVisible = true;

      beforeEach(() => {
        jest
          .spyOn(useUsersZustand, 'useUsersZustand')
          .mockReturnValue({users: mockUsers});

        render(
          <PostsFilterModal
            closeModal={closeModal}
            setSelectedFilterUserId={setSelectedFilterUserId}
            selectedFilterUserId={selectedFilterUserId}
            isVisible={isVisible}
          />,
        );
      });

      it('should render', () => {
        expect(screen.getByTestId('posts-filter-modal')).toBeTruthy();
      });

      it('should have header', () => {
        expect(screen.getByTestId('posts-filter-modal-header')).toBeTruthy();
      });

      it('should have body', () => {
        expect(screen.getByTestId('posts-filter-modal-body')).toBeTruthy();
      });

      it('should have footer', () => {
        expect(screen.getByTestId('posts-filter-modal-footer')).toBeTruthy();
      });
    });

    describe('when not visible', () => {
      const isVisible = false;

      beforeEach(() => {
        jest
          .spyOn(useUsersZustand, 'useUsersZustand')
          .mockReturnValue({users: mockUsers});

        render(
          <PostsFilterModal
            closeModal={closeModal}
            setSelectedFilterUserId={setSelectedFilterUserId}
            selectedFilterUserId={selectedFilterUserId}
            isVisible={isVisible}
          />,
        );
      });

      it('should not render', () => {
        expect(screen.queryByTestId('posts-filter-modal')).toBeNull();
      });

      it('should not have header', () => {
        expect(screen.queryByTestId('posts-filter-modal-header')).toBeNull();
      });

      it('should not have body', () => {
        expect(screen.queryByTestId('posts-filter-modal-body')).toBeNull();
      });

      it('should not have footer', () => {
        expect(screen.queryByTestId('posts-filter-modal-footer')).toBeNull();
      });
    });

    describe('when no users', () => {
      const isVisible = true;

      beforeEach(() => {
        jest
          .spyOn(useUsersZustand, 'useUsersZustand')
          .mockReturnValue({users: null});

        render(
          <PostsFilterModal
            closeModal={closeModal}
            setSelectedFilterUserId={setSelectedFilterUserId}
            selectedFilterUserId={selectedFilterUserId}
            isVisible={isVisible}
          />,
        );
      });

      it('should render null', () => {
        expect(screen.toJSON()).toBeNull();
      });
    });

    describe('pressing', () => {
      describe('closing', () => {
        beforeEach(() => {
          jest
            .spyOn(useUsersZustand, 'useUsersZustand')
            .mockReturnValue({users: mockUsers});

          render(
            <PostsFilterModal
              closeModal={closeModal}
              setSelectedFilterUserId={setSelectedFilterUserId}
              selectedFilterUserId={selectedFilterUserId}
              isVisible={true}
            />,
          );

          fireEvent.press(screen.getByRole('button', {name: 'close'}));
        });

        it('should call closeModal', () => {
          expect(closeModal).toHaveBeenCalledTimes(1);
        });
      });

      describe('apply', () => {
        beforeEach(() => {
          jest
            .spyOn(useUsersZustand, 'useUsersZustand')
            .mockReturnValue({users: mockUsers});

          render(
            <PostsFilterModal
              closeModal={closeModal}
              setSelectedFilterUserId={setSelectedFilterUserId}
              selectedFilterUserId={selectedFilterUserId}
              isVisible={true}
            />,
          );

          fireEvent.press(screen.getByRole('button', {name: 'apply'}));
        });

        it('should call closeModal', () => {
          expect(closeModal).toHaveBeenCalledTimes(1);
        });

        it('should call setSelectedFilterUserId', () => {
          expect(setSelectedFilterUserId).toHaveBeenCalledTimes(1);
          expect(setSelectedFilterUserId).toHaveBeenCalledWith(null);
        });
      });

      describe('clear', () => {
        const lineToCheck = 6;

        beforeEach(() => {
          jest
            .spyOn(useUsersZustand, 'useUsersZustand')
            .mockReturnValue({users: mockUsers});

          render(
            <PostsFilterModal
              closeModal={closeModal}
              setSelectedFilterUserId={setSelectedFilterUserId}
              selectedFilterUserId={selectedFilterUserId}
              isVisible={true}
            />,
          );

          const line = screen.getAllByTestId('filter-line')[lineToCheck];

          fireEvent.press(line);

          waitFor(() =>
            expect(line.props.accessibilityState.selected).toBe(true),
          );

          fireEvent.press(screen.getByRole('button', {name: 'clear'}));
        });

        it('should call closeModal', () => {
          expect(
            screen.getAllByTestId('filter-line')[lineToCheck].props
              .accessibilityState.selected,
          ).toBe(false);
        });
      });
    });
  });
});
