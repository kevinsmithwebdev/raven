import React from 'react';
import {mockUsers} from '../../../../../__mocks__/users.mocks';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import FilterLine from './FilterLine';

const mockUser = mockUsers[2];

const setLocalUserId = jest.fn();

beforeEach(jest.clearAllMocks);

describe('FilterLine', () => {
  describe('rendering', () => {
    describe('selected', () => {
      const isSelected = true;

      beforeEach(() => {
        render(
          <FilterLine
            {...mockUser}
            setLocalUserId={setLocalUserId}
            isSelected={isSelected}
          />,
        );
      });

      it('should render', () => {
        expect(screen.getByTestId('filter-line')).toBeTruthy();
      });

      it('should be selected', () => {
        expect(
          screen.getByTestId('filter-line').props.accessibilityState.selected,
        ).toBe(true);
        expect(
          screen.getByTestId('filter-line').props.style.backgroundColor,
        ).toBe('#0047AB');
      });

      it('should have name', () => {
        expect(screen.getByText(mockUser.name)).toBeTruthy();
      });
    });

    describe('not selected', () => {
      const isSelected = false;

      beforeEach(() => {
        render(
          <FilterLine
            {...mockUser}
            setLocalUserId={setLocalUserId}
            isSelected={isSelected}
          />,
        );
      });

      it('should render', () => {
        expect(screen.getByTestId('filter-line')).toBeTruthy();
      });

      it('should not be selected', () => {
        expect(
          screen.getByTestId('filter-line').props.accessibilityState.selected,
        ).toBe(false);
        expect(
          screen.getByTestId('filter-line').props.style.backgroundColor,
        ).toBe('#eee');
      });

      it('should have name', () => {
        expect(screen.getByText(mockUser.name)).toBeTruthy();
      });
    });
  });

  describe('pressing', () => {
    describe('when not already selected', () => {
      const isSelected = false;

      beforeEach(() => {
        render(
          <FilterLine
            {...mockUser}
            setLocalUserId={setLocalUserId}
            isSelected={isSelected}
          />,
        );

        fireEvent.press(screen.getByTestId('filter-line'));
      });

      it('should call setLocalUserId with correct id', () => {
        expect(setLocalUserId).toHaveBeenCalledTimes(1);
        expect(setLocalUserId).toHaveBeenCalledWith(3);
      });
    });

    describe('when already selected', () => {
      const isSelected = true;

      beforeEach(async () => {
        render(
          <FilterLine
            {...mockUser}
            setLocalUserId={setLocalUserId}
            isSelected={isSelected}
          />,
        );

        fireEvent.press(screen.getByTestId('filter-line'));

        await waitFor(() =>
          expect(
            screen.getByTestId('filter-line').props.accessibilityState.selected,
          ).toBe(true),
        );

        jest.clearAllMocks();

        fireEvent.press(screen.getByTestId('filter-line'));
      });

      it('should call setLocalUserId with null', () => {
        expect(setLocalUserId).toHaveBeenCalledTimes(1);
        expect(setLocalUserId).toHaveBeenCalledWith(null);
      });
    });
  });
});
