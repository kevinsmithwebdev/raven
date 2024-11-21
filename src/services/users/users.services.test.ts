import axios from 'axios';
import {loadUsers} from './users.services';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('user services', () => {
  describe('loadUsers', () => {
    describe('happy path', () => {
      beforeEach(() => {
        mockedAxios.get.mockResolvedValueOnce({data: 'mocked-data'});
      });

      it('should return the correct data', async () => {
        expect(await loadUsers()).toBe('mocked-data');
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
