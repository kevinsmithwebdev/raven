import {getInitialsFromName} from './getInitialsFromName';

describe('string utils - getInitialsFromName', () => {
  const testMatrix = [
    {name: undefined, expected: 'N/A'},
    {name: 'Jimmy Anderson', expected: 'JA'},
    {name: 'Madonna', expected: 'MA'},
    {name: 'Mrs Robinson', expected: 'RO'},
    {name: 'Miss', expected: 'N/A'},
    {name: '', expected: 'N/A'},
  ];

  describe.each(testMatrix)('for name=$name', ({name, expected}) => {
    it(`should return "${expected}"`, () => {
      expect(getInitialsFromName(name)).toBe(expected);
    });
  });
});
