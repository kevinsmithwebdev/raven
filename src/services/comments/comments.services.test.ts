import axios from 'axios';
import {COMMENTS_URL} from '../apiRoutes';
import {Comment} from '../../types/jsonPlaceholder.types';
import {loadCommentsByPostId} from './comments.services';
import {mockComments} from '../../__mocks__/comments.mocks';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
let returnValue: Comment[] | null;

beforeEach(jest.clearAllMocks);

describe('comments services', () => {
  describe('loadCommentsByPostId', () => {
    describe('throwing error', () => {
      beforeEach(() => {
        mockedAxios.get.mockRejectedValueOnce(() => 'test error');
      });

      it('should return the correct data', async () => {
        await expect(async () => {
          await loadCommentsByPostId(12);
        }).rejects.toThrow();
      });
    });

    describe('happy path', () => {
      beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({data: mockComments});

        returnValue = await loadCommentsByPostId(12);
      });

      it('should return the correct data', () => {
        expect(returnValue).toStrictEqual(mockComments);
      });

      it('should call get with the correct params', () => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(
          `${COMMENTS_URL}?postId=12`,
        );
      });
    });

    describe('with nullish postId', () => {
      beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({data: mockComments});

        returnValue = await loadCommentsByPostId(null);
      });

      it('should return null', () => {
        expect(returnValue).toBeNull();
      });

      it('should call get with the correct params', () => {
        expect(mockedAxios.get).not.toHaveBeenCalled();
      });
    });
  });
});
