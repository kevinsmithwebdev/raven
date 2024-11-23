import axios from 'axios';
import {loadUsers} from './users.services';
import {USERS_URL} from '../apiRoutes';
import {User} from '../../types/jsonPlaceholder.types';
import {mockUsers} from '../../__mocks__/users.mocks';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
let returnValue: User[] | null;

beforeEach(jest.clearAllMocks);

describe('users services', () => {
  describe('loadUsers', () => {
    describe('happy path', () => {
      beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({data: mockUsers});

        returnValue = await loadUsers();
      });

      it('should return the correct data', () => {
        expect(returnValue).toStrictEqual(mockUsers);
      });

      it('should call get with the correct params', () => {
        expect(mockedAxios.get).toHaveBeenCalledWith(USERS_URL);
      });
    });

    describe('throwing error', () => {
      beforeEach(() => {
        mockedAxios.get.mockRejectedValueOnce(() => 'test error');
      });

      it('should return the correct data', async () => {
        await expect(async () => {
          await loadUsers();
        }).rejects.toThrow();
      });
    });
  });
});
