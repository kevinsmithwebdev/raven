import axios from 'axios';
import {POSTS_URL} from '../apiRoutes';
import {Post} from '../../types/jsonPlaceholder.types';
import {loadAllPosts} from './posts.services';
import {mockPosts} from '../../__mocks__/posts.mocks';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
let returnValue: Post[] | null;

beforeEach(jest.clearAllMocks);

describe('posts services', () => {
  describe('loadAllPosts', () => {
    describe('happy path', () => {
      beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({data: mockPosts});

        returnValue = await loadAllPosts();
      });

      it('should return the correct data', () => {
        expect(returnValue).toStrictEqual(mockPosts);
      });

      it('should call get with the correct params', () => {
        expect(mockedAxios.get).toHaveBeenCalledWith(POSTS_URL);
      });
    });

    describe('throwing error', () => {
      beforeEach(() => {
        mockedAxios.get.mockRejectedValueOnce(() => 'test error');
      });

      it('should return the correct data', async () => {
        await expect(async () => {
          await loadAllPosts();
        }).rejects.toThrow();
      });
    });
  });
});
