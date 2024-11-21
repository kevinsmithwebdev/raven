import axios from 'axios';
import {POSTS_URL} from '../apiRoutes';
import {Post} from '../../types/jsonPlaceholder.types';
import {loadAllPosts} from './posts.services';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
let returnValue: Post[] | null;

beforeEach(jest.clearAllMocks);

describe('posts services', () => {
  describe('loadAllPosts', () => {
    describe('happy path', () => {
      beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({data: 'mocked-data'});

        returnValue = await loadAllPosts();
      });

      it('should return the correct data', () => {
        expect(returnValue).toBe('mocked-data');
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
