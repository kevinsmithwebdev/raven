import {
  renderHook,
  RenderHookResult,
  waitFor,
} from '@testing-library/react-native';
import {UsePostFilterState, usePostsFilter} from './usePostsFilter';
import {act} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {EVENTS} from '../../../constants/events';
import * as usePostsZustand from '../../../state/posts/posts.zustand';
import {mockPosts} from '../../../__mocks__/posts.mocks';

let renderedHook: RenderHookResult<UsePostFilterState, undefined>;

const mockSetParams = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({setParams: mockSetParams}),
}));

const expectedInitialState: UsePostFilterState = {
  isFilterModalVisible: false,
  closeFilterModal: expect.any(Function),
  selectedFilterUserId: null,
  setSelectedFilterUserId: expect.any(Function),
  filteredPosts: null,
};

beforeEach(jest.clearAllMocks);

describe('usePostsFilter', () => {
  describe('initial state', () => {
    beforeEach(() => {
      renderedHook = renderHook(usePostsFilter);
    });

    it('should return initial state', () => {
      expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
    });
  });

  describe('when setSelectedFilterUserId is called', () => {
    describe('selecting number', () => {
      beforeEach(() => {
        renderedHook = renderHook(usePostsFilter);

        jest.clearAllMocks();

        act(() => renderedHook.result.current.setSelectedFilterUserId(2));
      });

      it('should call setParams', () => {
        expect(mockSetParams).toHaveBeenCalledTimes(1);
        expect(mockSetParams).toHaveBeenCalledWith({isFilterDirty: true});
      });

      it('should return the correct new state', () => {
        expect(renderedHook.result.current).toStrictEqual({
          ...expectedInitialState,
          selectedFilterUserId: 2,
        });
      });
    });

    describe('selecting null', () => {
      beforeEach(() => {
        renderedHook = renderHook(usePostsFilter);

        act(() => renderedHook.result.current.setSelectedFilterUserId(2));

        waitFor(() =>
          expect(renderedHook.result.current.selectedFilterUserId).toBe(2),
        );

        jest.clearAllMocks();

        act(() => renderedHook.result.current.setSelectedFilterUserId(null));
      });

      it('should call setParams', () => {
        expect(mockSetParams).toHaveBeenCalledTimes(1);
        expect(mockSetParams).toHaveBeenCalledWith({isFilterDirty: false});
      });

      it('should return the correct new state (reset to initial)', () => {
        expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
      });
    });

    describe('filter icon press event', () => {
      beforeEach(() => {
        renderedHook = renderHook(usePostsFilter);

        act(() => DeviceEventEmitter.emit(EVENTS.filterIconPress));
      });

      it('should return the correct new state, with modal visible', () => {
        expect(renderedHook.result.current).toStrictEqual({
          ...expectedInitialState,
          isFilterModalVisible: true,
        });
      });
    });

    describe('closeFilterModal', () => {
      beforeEach(() => {
        renderedHook = renderHook(usePostsFilter);

        act(() => DeviceEventEmitter.emit(EVENTS.filterIconPress));

        waitFor(() =>
          expect(renderedHook.result.current.isFilterModalVisible).toBe(true),
        );

        act(renderedHook.result.current.closeFilterModal);
      });

      it('should return the correct new state, with modal closed', () => {
        expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
      });
    });

    describe('filtering', () => {
      describe('no selectedFilterUserId', () => {
        beforeEach(() => {
          jest
            .spyOn(usePostsZustand, 'usePostsZustand')
            .mockReturnValue({posts: mockPosts});

          renderedHook = renderHook(usePostsFilter);

          waitFor(() =>
            expect(renderedHook.result.current.selectedFilterUserId).toBeNull(),
          );
        });

        it('should return all posts for filtered posts', () => {
          expect(renderedHook.result.current.filteredPosts).toStrictEqual(
            mockPosts,
          );
        });
      });

      describe('with selectedFilterUserId', () => {
        const selectedFilterId = 4;

        beforeEach(() => {
          jest
            .spyOn(usePostsZustand, 'usePostsZustand')
            .mockReturnValue({posts: mockPosts});

          renderedHook = renderHook(usePostsFilter);

          act(() =>
            renderedHook.result.current.setSelectedFilterUserId(
              selectedFilterId,
            ),
          );

          waitFor(() =>
            expect(renderedHook.result.current.selectedFilterUserId).toBe(
              selectedFilterId,
            ),
          );
        });

        it('should return filtered posts', () => {
          const expectedFilteredPosts = mockPosts.filter(
            post => post.userId === selectedFilterId,
          );
          expect(renderedHook.result.current.filteredPosts).toStrictEqual(
            expectedFilteredPosts,
          );
        });
      });

      describe('no posts', () => {
        beforeEach(() => {
          jest
            .spyOn(usePostsZustand, 'usePostsZustand')
            .mockReturnValue({posts: null});

          renderedHook = renderHook(usePostsFilter);

          waitFor(() =>
            expect(renderedHook.result.current.selectedFilterUserId).toBeNull(),
          );
        });

        it('should return all posts for filtered posts', () => {
          expect(renderedHook.result.current.filteredPosts).toBeNull();
        });
      });
    });
  });
});
